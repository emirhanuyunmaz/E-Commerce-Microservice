'use client'
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const FormSchema = z.object({
  oldPassword: z.string().min(5, {
    message: 'Old Password must be at least 5 characters.',
  }),
  newPassword: z.string().min(5, {
    message: 'New Password must be at least 6 characters.',
  }),
  newPasswordConfirm: z.string().min(5, {
    message: 'New Password Confirm must be at least 6 characters.',
  }),
})  .refine((data) => data.newPassword === data.newPasswordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm'],
  });


export default function Page(){

      const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          newPassword: '',
          newPasswordConfirm: '',
          oldPassword: '',
        },
      });
    
      async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('DATA:', data);
      }


    return (<div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Old Password" {...field} />
                  </FormControl>
                  <FormMessage />
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="New Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="newPasswordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password Confirm</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="New Password Confirm" {...field} />
                  </FormControl>
                  <FormMessage />
                  
                </FormItem>
              )}
            />
            <div className="flex justify-end">
                <Button type="submit" className="text-white">
                    Change Password
                </Button>
            </div>
          </form>
        </Form>
        
    </div>)
}