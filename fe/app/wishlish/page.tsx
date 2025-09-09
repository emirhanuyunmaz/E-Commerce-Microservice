import ProductCard from '@/components/fe/ProductCard';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="mx-auto my-10 flex min-h-[80vh] max-w-7xl flex-col gap-3">
      <div className="my-10 flex justify-between">
        <div>
          <p>Wishlish (10)</p>
        </div>
        <div>
          <Button variant={'outline'}>Move All To Bag</Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
