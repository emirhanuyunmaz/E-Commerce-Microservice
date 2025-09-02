import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SlashIcon } from "lucide-react";
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
                    <p >Account</p>
                </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </div>

    <div className="flex gap-3">
        {/* PROFILE - INPUT */}
        <div className="w-1/5 flex flex-col gap-5">

            <div className="flex flex-col gap-3">
                <h4>Manage My Account</h4>
                <ul className="ms-5 flex flex-col gap-3 text-gray-400 ">
                    <li className="hover:text-black cursor-pointer">My Profile</li>
                    <li className="hover:text-black cursor-pointer">Address Book</li>
                    <li className="hover:text-black cursor-pointer">Change Password</li>
                </ul>

            </div>
            
            <div className="flex flex-col gap-3">
                <h4>My Orders</h4>
                <ul className="ms-5 flex flex-col gap-3 text-gray-400 ">
                    <li className="hover:text-black cursor-pointer">My Returns</li>
                    <li className="hover:text-black cursor-pointer">My Collections</li>
                </ul>

            </div>
        </div>

        {/* NAVIGATION */}
        <div className="w-2/3 flex flex-col gap-3 shadow-xl p-10">
            <div>
                <p className="text-secondary">Edit Your Profile</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="text" placeholder="Name" />
                </div>

                <div>
                    <Label htmlFor="surname">Surname</Label>
                    <Input type="text" id="surname" placeholder="Surname" />
                </div>
                
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>

                <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Address" />
                </div>
                <div className="flex justify-end">
                    <Button variant={"secondary"} className="text-white ">Save Change</Button>
                </div>
            </div>


        </div>

    </div>
    

    </div>)
}