import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import Link from "next/link";

export default function Layout({children}:{children:React.ReactElement}){
    return(<div className="mx-auto min-h-[80vh] max-w-7xl mb-5">
        <div className="my-16">
            <Breadcrumb>
                <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <Link href="/" className="text-gray-400">
                        Home
                    </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                    <p>Account</p>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    <div className=" flex gap-3">
    <div className="flex w-1/5 flex-col gap-5">
        
        {/* PROFILE - INPUT */}
        <div className="flex  flex-col gap-5">
            <div className="flex flex-col gap-3">
                <h4>Manage My Account</h4>
                <ul className="ms-5 flex flex-col gap-3 text-gray-400">
                <li className="cursor-pointer hover:text-black"><Link href={`/account`}>My Profile</Link></li>
                <li className="cursor-pointer hover:text-black"><Link href={`/account/address`}>Address Book</Link></li>
                <li className="cursor-pointer hover:text-black"><Link href={`/account/changePassword`}>Change Password</Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-3">
            <h4>My Orders</h4>
            <ul className="ms-5 flex flex-col gap-3 text-gray-400">
              <li className="cursor-pointer hover:text-black">My Returns</li>
              <li className="cursor-pointer hover:text-black">My Collections</li>
            </ul>
          </div>
          </div>
        <div>
        </div>
    </div>
    <div className="w-4/5">
        {children}
    </div>
    </div></div>)
}