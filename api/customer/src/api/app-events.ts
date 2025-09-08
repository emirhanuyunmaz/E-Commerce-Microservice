import { Application } from "express";
import { CustomerService } from "../service/CustomerService";
import { Channel } from "amqplib";

export function AppEvents(app:Application,channel:Channel){
    
    const service = new CustomerService()
    
    app.use('/app-events',async (req,res,next) => {

        
        const { payload } = req.body;
        
        service.SubscribeEvents(payload);

        console.log("============= Shopping ================");
        console.log(payload);
        res.json(payload);

    });

}