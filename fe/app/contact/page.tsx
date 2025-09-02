'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  Mail, Phone, SlashIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
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

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(3, {
      message: "Email must be at least 3 characters.",
    }),
  phone: z.string().min(2, {
        message: "Surname must be at least 2 characters.",
  }),
  messages: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
})


export default function Page(){

    const form = useForm<z.infer<typeof FormSchema>>({
          resolver: zodResolver(FormSchema),
          defaultValues: {
            name:"",
            phone:"",
            email: "",
            messages:"",
          },
    })
    
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("DATA:",data);
    }

    return(<div className="max-w-7xl mx-auto min-h-[80vh]">
    <div className="my-16">        
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <Link href="/" className="text-gray-400">Home</Link>
                </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                <BreadcrumbLink asChild>
                    <p >Contact</p>
                </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </div >
    <div className="mt-10 flex flex-col-reverse md:flex-row gap-3">
        <div className="w-full md:w-1/4 shadow-xl p-5 rounded-xl ">

            <div className="flex flex-col justify-center gap-2 border-b py-3">
                <div className="flex items-center gap-1">
                    <div className="bg-red-500 text-white rounded-full p-2">
                        <Phone />
                    </div>
                    <p>Call To Us</p>
                </div>
                <p>We are available 24/7 days a week </p>
                <p><span className="font-bold">Phone:</span>0344444444</p>
            </div>

            <div className="flex flex-col justify-center gap-2  py-3">
                <div className="flex items-center gap-1">
                    <div className="bg-red-500 text-white rounded-full p-2">
                        <Mail />
                    </div>
                    <p>Call To Us</p>
                </div>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p><span className="font-bold">Emails:</span> help@example.com</p>
                <p><span className="font-bold">Emails:</span> support@example.com</p>
            </div>


        </div>
        
        <div className="w-full md:w-3/4 flex flex-col gap-3 shadow-xl p-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                            <Input placeholder="Phone" {...field} />                          
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    
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
                    />
                    </div>
                    
                    <div className="">
                        <FormField
                        control={form.control}
                        name="messages"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea className="min-h-[20vh]" placeholder="Message" {...field} />                          
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <div className="flex items-end">
                        <Button type="submit" variant={"secondary"} className="text-white ms-auto" >
                            Send Message
                        </Button>
                    </div>
                </form>
            </Form>
            
        </div>
        </div>
    </div>)
}