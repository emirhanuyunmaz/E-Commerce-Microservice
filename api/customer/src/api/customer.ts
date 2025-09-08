import { Channel } from "amqplib";
import { Application } from "express";
import { CustomerService } from "../service/CustomerService";
import { SubscribeMessage } from "../utils";
import { SendEmail } from "../utils/send-email";


export const customer = async (app:Application,channel:Channel) => {
    const service = new CustomerService()
    const sendEmail = new SendEmail()

    SubscribeMessage(channel,service);
    
    app.get('/deneme', async (req,res,next) => {
       return res.json({message:"success"});
    });

    app.post("/login",async (req,res,next) => {
        console.log("ASDDSA");
        const {email,password} = req.body
        await service.CreateCustomer({email,password})
        console.log(email,password);
        return res.status(200).json({email,password})  
    })

    app.post("/sendEmail",async(req,res,next) => {
        const {email} = req.body
        const code = sendEmail.createCode() as string

        const sendedMessage = await sendEmail.sendMessageVeriyEmail(email,code as string)
        
        if(sendedMessage){
            service.CreateEmailCode({email,code})
            res.status(201).json({message:"succes"})
        }
        else{
            res.status(400).json({message:"ERROR EMAIL"})
        }
    })

    app.post("/verifyEmail",async(req,res,next) => {
        const {email,code} = req.body
        
        const result = await service.VerifyEmailCode({email,code})
        console.log("RESS:",result);
        
        if(result){
            return res.status(200).json({message:"success"})
        }else{
            return res.status(400).json({message:"Code is not found"})
        }
    })

    app.post("/createCustomer",async (req,res,next) => {
        const { email , password } = req.body
        console.log("CREATE");
        
        if(password != ""){
            await service.CreateCustomer({email,password})
            res.status(201).json({message:"success"})
        }else{
            res.status(400).json({message:"Password is not emty"})
        }
    })

}