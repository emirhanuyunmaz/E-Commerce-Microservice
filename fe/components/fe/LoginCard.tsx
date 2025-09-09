'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useLoginMutation } from '@/store/customer/customerApi';
import { ToastError, ToastSuccess } from '@/lib/toast';
import { setCookie } from 'cookies-next';
const FormSchema = z.object({
  email: z.string().min(5, {
    message: 'Email must be at least 5 characters.',
  }),
  password: z.string().min(5, {
    message: 'Password must be at least 6 characters.',
  }),
});

export default function LoginCard() {
  // const navigate = useNavi
  const [login, resLogin] = useLoginMutation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('DATA:', data);
    await login(data)
      .unwrap()
      .then((res) => {
        console.log('RES:', res);
        ToastSuccess('WELCOME');
        setCookie('token', res.token);
        
      })
      .catch((err) => {
        ToastError('Please try again !');
        console.log('ERR:', err);
      });
  }

  return (
    <Card className="w-full max-w-sm p-5">
      <CardHeader className="ms-0">
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        <CardAction>
          <Link href={`/signup`} className="font-bold">
            Sign Up
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
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
            <Button type="submit" className="w-full text-white">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
