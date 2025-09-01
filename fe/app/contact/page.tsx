import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  Mail, Phone, SlashIcon } from "lucide-react";
import Link from "next/link";

export default function Page(){
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
    <div className="mt-10 flex gap-3">
        <div className="w-1/4 shadow-xl p-5 rounded-xl ">

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
        
        <div className="w-3/4 flex flex-col gap-3 shadow-xl p-5">
            <div className="flex gap-3">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email"/>
                <Input placeholder="Your Phone"/>
            </div>
            <div>
                <Textarea placeholder="Your Message" className="min-h-[20vh]" />
            </div>

        <Button variant={"secondary"} className="text-white ms-auto">Send Message</Button>
        </div>
        </div>
    </div>)
}