import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Circle, Heart, RefreshCw, SlashIcon, Star, Truck } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="mx-auto my-10 max-w-7xl">
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
                <p className="text-gray-400">Category</p>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <p>Product Name</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* PRODUCT IMAGE */}
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="grid w-full grid-cols-10 gap-1 lg:w-3/5 lg:grid-cols-12 lg:gap-3">
          <div className="col-span-2 flex flex-col gap-3 lg:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full"
            />
          </div>

          {/* SHOW İMAGE */}
          <div className="col-span-8 h-full lg:col-span-10">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
          </div>
        </div>

        <div className="mx-3 flex flex-col gap-3 lg:mx-0 lg:w-1/3">
          {/* PRODUCT NAME */}
          <div>
            <p className="text-xl font-bold">Havic HV G-92 Gamepad</p>
          </div>

          {/* STARS */}
          <div className="flex gap-3">
            <div className="flex">
              <Star color="white" fill="yellow" />
              <Star color="white" fill="yellow" />
              <Star color="white" fill="yellow" />
              <Star color="white" fill="gray" />
              <Star color="white" fill="gray" />
            </div>
            <div className="flex gap-3">
              <p className="text-gray-400">(150 Reviews)</p>
              <p>|</p>
              <p className="text-success">In Stock</p>
            </div>
          </div>

          {/* PRICE */}
          <div>
            <p className="text-2xl font-medium">$123</p>
          </div>

          {/* PRODUCT ABOUT */}
          <div className="flex border-b border-gray-400 pb-5">
            <p className="text-wrap">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur voluptate quos
              quam, cumque, commodi corrupti cupiditate aliquid facere ducimus dignissimos
              repudiandae reiciendis eos repellat consequatur earum doloremque{' '}
            </p>
          </div>

          {/* PRODUCT - COLORS */}
          <div className="flex items-center gap-3">
            <p>Colours:</p>
            <div className="flex">
              <Circle size={16} color="white" fill="red" />
              <Circle size={16} color="white" fill="blue" />
            </div>
          </div>

          {/* PRODUCT - SİZE */}

          <div className="flex items-center gap-3">
            <p>Size:</p>
            <div className="flex gap-3">
              <Button variant={'outline'}>XS</Button>
              <Button variant={'outline'}>S</Button>
              <Button variant={'outline'} className="bg-secondary text-white">
                M
              </Button>
              <Button variant={'outline'}>L</Button>
              <Button variant={'outline'}>XL</Button>
            </div>
          </div>

          <div className="flex gap-3">
            {/* PRODUCT QUANTİTY */}
            <div className="flex w-1/3 gap-1">
              <Button variant={'outline'}>-</Button>
              <Input disabled placeholder="0" className="text-center" />
              <Button variant={'outline'}>+</Button>
            </div>
            {/* BUY BUTTON */}
            <div className="w-1/3">
              <Button variant={'secondary'} className="w-full text-white">
                Buy Now
              </Button>
            </div>

            {/* FOLLOW */}
            <div>
              <Button variant={'outline'}>
                <Heart />
              </Button>
            </div>
          </div>
          {/* PRODUCT SUPPORT */}
          <div className="">
            <div className="flex gap-3 border border-gray-400 p-3">
              <div className="flex items-center justify-center">
                <Truck size={32} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold">Free Delivery</p>
                <p className="text-sm">Enter your postal code for delivery</p>
              </div>
            </div>

            <div className="flex gap-3 border border-gray-400 p-3">
              <div className="flex items-center justify-center">
                <RefreshCw size={32} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold">Return Delivery</p>
                <p className="text-sm">Free 30 days delivery returns .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
