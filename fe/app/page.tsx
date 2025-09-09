'use client';
import { Categories } from '@/components/fe/Categories';
import { HomeCarousel } from '@/components/fe/HomeCarousel';
import ProductCard from '@/components/fe/ProductCard';

export default function Home() {
  return (
    <div className="mx-auto min-h-[80vh] max-w-7xl">
      <div className="flex">
        <div>
          <Categories />
        </div>

        <div className="md:w-3/4">
          <HomeCarousel />
        </div>
      </div>
      <div className="flex">
        <ProductCard />
      </div>
    </div>
  );
}
