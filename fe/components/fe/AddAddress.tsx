import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { Textarea } from "../ui/textarea";
import { useAddAddressMutation } from "@/store/customer/customerApi";
import { ToastError, ToastSuccess } from "@/lib/toast";

const FormSchema = z.object({
  street: z.string().min(3, {
    message: 'Name must be at least 2 characters.',
  }),
  postalCode: z.string().min(5, {
    message: 'Surname must be at least 2 characters.',
  }),
  city: z.string().min(5, {
    message: 'Email must be at least 2 characters.',
  }),
  country: z.string().min(5, {
    message: 'Phone must be at least 2 characters.',
  }),
  fullAddress: z.string().min(5, {
    message: 'Full Address must be at least 5 characters.',
  }),
  
});

export default function AddAddress(){

  const [addAddress,resAddAddress] = useAddAddressMutation()

    const form = useForm<z.infer<typeof FormSchema>>({
          resolver: zodResolver(FormSchema),
          defaultValues: {
            
          },
    });
      
    
    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('DATA:', data);
        await addAddress(data).unwrap()
        .then((res) => {
          console.log("RES:",res);
          ToastSuccess("Add Address is Success")
        }).catch((err) => {
          console.log("ERR:",err);
          ToastError("ERROR")
        })
    }
    return (<Dialog >
        <DialogTrigger asChild>
          <Button variant="outline">+Add Address</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Address</DialogTitle>
            <DialogDescription>
              Please fill out all the information for a new address.
            </DialogDescription>
          </DialogHeader>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Street</FormLabel>
                        <FormControl>
                        <Input placeholder="Street" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Postal Code</FormLabel>
                        <FormControl>
                        <Input placeholder="Postal Code" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                        <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                        <Input placeholder="Country" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="fullAddress"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Address</FormLabel>
                        <FormControl>
                        <Textarea placeholder="Full Address" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <div className="flex justify-end"> 
                    <Button type="submit" variant={"outline"}>Save changes</Button>
                </div>
                </form>
                </Form>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" className="text-white ">Cancel</Button>
            </DialogClose>
            
          </DialogFooter>
        </DialogContent>
    </Dialog>)
}