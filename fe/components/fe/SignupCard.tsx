'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {  useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useCreateCustomerMutation, useSendEmailMutation, useVerifyEmailMutation } from "@/store/customer/customerApi"
import { ToastError, ToastSuccess } from "@/lib/toast"

const FormSchema = z.object({
  email: z.string().min(5, {
    message: "Email must be at least 5 characters.",
  }),
  code: z.string().min(5, {
    message: "Code must be at least 5 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Confirm Password must be at least 6 characters.",
  }),

}).refine((data) => data.password === data.confirmPassword,{
    message: "Passwords don't match",
    path: ["passwordConfirm"],
})


export default function SignupCard(){
    const [sendEmail,resSendEmail] = useSendEmailMutation()
    const [verifyEmail,resVerifyEmail] = useVerifyEmailMutation()
    const [createCustomer,resCreateCustomer] = useCreateCustomerMutation()

    const router = useRouter()
    const [select,setSelect] = useState(0)

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: "",
        code:"",
        password:"",
        confirmPassword:""
      },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
      form.clearErrors()
      form.trigger(["password","confirmPassword"]).then(async (value) => {
        if(value){
          await createCustomer({email:form.getValues("email").replaceAll(" ",""),password:form.getValues("password").replaceAll(" ","")}).unwrap()
          .then((res) => {
            ToastSuccess("Success create new customer")
            router.push("/login")
          }).catch((err) => {
            ToastError("ERROR Try Again")
          })
        }
      })
    }
    
    
    async function nextButton(){
      form.clearErrors()
      
      if(select == 0){
        form.trigger("email").then(async (value) => {
          if(value){
            await sendEmail({email:form.getValues("email").replaceAll(" ","")}).unwrap()
            .then((res) => {
              ToastSuccess("Sended Code")
              setSelect(select + 1)
            }).catch((err) => {
              ToastError("Not Send Email Try Again")
              console.log("EMAİl:ERR:",err);
            })
          }
        })
      }
      
      else if (select == 1){
        form.clearErrors()
        form.trigger("code").then(async (value) => {
          if(value){
            await verifyEmail({email:form.getValues("email").replaceAll(" ",""),code:form.getValues("code").replaceAll(" ","")}).unwrap()
            .then((res) => {
              ToastSuccess("Code entered is correct")
              setSelect(select + 1)
            }).catch((err) => {
              ToastError("Code entered is incorrect")
              console.log("ERR:",err);
              
            })
          }
        })
      }

    }

    function goToLogin(){
      router.push("/login",)
    }


    return(<Card className="w-full max-w-sm p-3">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
            
            {select == 0 && 
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />}
            {select == 1 && 
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                      <Input placeholder="Code" {...field} />                          
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />}

            {select == 2 && <>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                      <Input placeholder="Password" {...field} />                          
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confim Password</FormLabel>
                  <FormControl>
                      <Input placeholder="Confirm Password" {...field} />                          
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </>
            }
            {select == 2 && 
              <Button type="submit" className="w-full text-white">
                  Signup
              </Button>
            }
             {select != 2 && <Button onClick={nextButton}  className="w-full text-white">
                Next
            </Button>}
            
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        
        <Button variant="outline" className="w-full" onClick={goToLogin}>
            {"<-"}Login
        </Button>
      </CardFooter>
    </Card>)
}