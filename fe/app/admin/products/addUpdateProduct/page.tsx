'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Camera, Eye, ImageUp, LucideStepBack, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

const items = [
  {
    id: 'XS',
    label: 'XS',
  },
  {
    id: 'S',
    label: 'S',
  },
  {
    id: 'M',
    label: 'M',
  },
  {
    id: 'L',
    label: 'L',
  },
  {
    id: 'XL',
    label: 'XL',
  },
] as const;

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Description must be at least 2 characters.',
  }),
  banner: z.string().min(2, {
    message: 'Banner must be at least 2 characters.',
  }),
  type: z.string().min(2, {
    message: 'Type must be at least 2 characters.',
  }),
  unit: z.string().min(2, {
    message: 'Unit must be at least 2 characters.',
  }),
  price: z.string().min(1, {
    message: 'Price must be at least 1 characters.',
  }),
  available: z.string().min(1, {
    message: 'Available must be at least 1 characters.',
  }),
  suplier: z.string().min(1, {
    message: 'Suplier must be at least 1 characters.',
  }),
  sizes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
});

export default function Page() {
  const [file, setFile] = useState<File[] | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      available: '',
      banner: '',
      description: '',
      price: '',
      suplier: '',
      type: '',
      unit: '',
      sizes: [],
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('DATA:', data);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile([...(file ?? []), e.target.files[0]]);
    }
  };

  const router = useRouter();
  function toBack() {
    router.back();
  }

  return (
    <div className="my-3 flex flex-col gap-3">
      <p>{file?.length}</p>
      <div>
        <Button onClick={toBack} variant={`outline`}>
          <LucideStepBack />
        </Button>
      </div>

      <div className="">
        <div className="flex gap-3 py-3">
          <label
            htmlFor="imageUpload"
            className="flex h-40 w-40 items-center justify-center rounded-xl border border-gray-500"
          >
            <Camera />
          </label>
          <input type="file" id="imageUpload" className="hidden" onChange={handleFileChange} />
          {file &&
            file.map((data, idx) => (
              
                <div key={idx} className="flex flex-col gap-3">
                  <img src={URL.createObjectURL(data)} className="h-40 w-40" />
                  <div className="flex justify-around">
                    <Button variant={`secondary`} className="hover:opacity-50">
                      <Trash2 />
                    </Button>
                    <Button variant={`default`} className="bg-blue-500 hover:opacity-50">
                      <Eye />
                    </Button>
                    <Button variant={`default`} className="bg-green-500 hover:opacity-50">
                      <ImageUp />
                    </Button>
                  </div>
                </div>

            ))}
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="available"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Available</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Available" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="banner"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Banner</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Banner" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="suplier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Supline</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Supline" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Type" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex flex-col gap-3'>

                <FormField
                  control={form.control}
                  name="unit"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Unit</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Unit" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />

                  <FormField
                    control={form.control}
                    name="sizes"
                    render={() => (
                      <FormItem className='flex'>
                        <div className="mb-2">
                          <FormLabel className="text-base">Sizes</FormLabel>
                          
                        </div>
                        {items.map((item) => (
                          <FormField
                            
                            key={item.id}
                            control={form.control}
                            name="sizes"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-center gap-2 border border-gray-500 rounded-xl px-2 hover:border-black transition-all"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, item.id])
                                          : field.onChange(
                                              field.value?.filter((value) => value !== item.id),
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Description" {...field} className='min-h-40' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <div></div>
        </div>
      </div>
    </div>
  );
}
