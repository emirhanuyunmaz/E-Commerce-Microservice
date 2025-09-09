'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useGetProfileQuery } from '@/store/customer/customerApi';
import { getCookie } from 'cookies-next';
import { SlashIcon } from 'lucide-react';
import Link from 'next/link';
import { unauthorized } from 'next/navigation';
// import { jwt } from 'zod';
import { isValidJWT } from 'zod/v4/core';

export default function Page() {
   
  let token = getCookie('token') ?? "" 
  let isValid = isValidJWT(token as  string)
  const profile = useGetProfileQuery({token:token})
  console.log(profile.data);
  
  if (isValid == undefined) {
    unauthorized();
  }

  return (
    <div className="mx-auto min-h-[80vh] max-w-7xl">
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

      <div className="flex gap-3">
        {/* PROFILE - INPUT */}
        <div className="flex w-1/5 flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h4>Manage My Account</h4>
            <ul className="ms-5 flex flex-col gap-3 text-gray-400">
              <li className="cursor-pointer hover:text-black">My Profile</li>
              <li className="cursor-pointer hover:text-black">Address Book</li>
              <li className="cursor-pointer hover:text-black">Change Password</li>
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

        {/* NAVIGATION */}
        <div className="flex w-2/3 flex-col gap-3 p-10 shadow-xl">
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
              <Button variant={'secondary'} className="text-white">
                Save Change
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
