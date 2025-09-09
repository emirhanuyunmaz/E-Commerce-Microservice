import ProductBuyingTable from '@/components/fe/ProductBuyingTable';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { SlashIcon } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl">
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
                <p>Buying</p>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col">
        <div className="">
          <ProductBuyingTable />
        </div>

        <div></div>
      </div>
    </div>
  );
}
