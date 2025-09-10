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
import { zodResolver } from '@hookform/resolvers/zod';
import { getCookie } from 'cookies-next';
import { SlashIcon } from 'lucide-react';
import Link from 'next/link';
import { unauthorized } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import z from 'zod';
import { isValidJWT } from 'zod/v4/core';

const FormSchema = z.object({
  name: z.string().min(3, {
    message: 'Name must be at least 3 characters.',
  }),
  surname: z.string().min(5, {
    message: 'Surname must be at least 5 characters.',
  }),
  email: z.string().min(5, {
    message: 'Email must be at least 5 characters.',
  }),
  phone: z.string().min(5, {
    message: 'Phone must be at least 5 characters.',
  }),
  address: z.string().min(5, {
    message: 'Surname must be at least 5 characters.',
  }),
  
});


export default function Page() {
   
  let token = getCookie('token') ?? "" 
  let isValid = isValidJWT(token as  string)
  const profile = useGetProfileQuery({token:token})
  console.log(profile.data);

  const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: '',
        address:'',
        phone:'',
        name:'',
        surname:'',
      },
  });
  

  async function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log('DATA:', data);

    }
  
  if (isValid == undefined) {
    unauthorized();
  }

  useEffect(() => {
    if(profile.isSuccess){
      console.log(profile.data.email);
      
      form.setValue("email",profile.data?.email)
      form.setValue("phone",profile.data?.phone)
      form.setValue("address",profile.data?.address)
      form.setValue("name",profile.data?.name)
      form.setValue("surname",profile.data?.surname)
    }
  },[profile.isFetching,profile.isSuccess,profile.isError])

  return (
    <div className="">
      

      <div className="flex gap-3">
        {/* PROFILE - INPUT */}
        

        {/* NAVIGATION */}
        <div className="flex w-full flex-col gap-3 p-10 shadow-xl">
          <div>
            <p className="text-secondary">Edit Your Profile</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="surname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Surname</FormLabel>
                          <FormControl>
                            <Input placeholder="Surname" {...field} />
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
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Button type='submit' variant={'secondary'} className="text-white">
                        Save Change
                      </Button>
                  </div>
                  </form>
                </Form>
                      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
