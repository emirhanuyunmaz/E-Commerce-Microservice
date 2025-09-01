import { Categories } from "@/components/fe/Categories";
import { HomeCarousel } from "@/components/fe/HomeCarousel";
import ProductCard from "@/components/fe/ProductCard";

export default function Home() {
  return (<div className="max-w-7xl min-h-[80vh] mx-auto">
    <div className="flex">
      <div>
        <Categories/>
      </div>

      <div className="md:w-3/4">
        <HomeCarousel/>
      </div>

    </div>
      <div className="flex">
        <ProductCard/>
      </div>
  </div>);
}
