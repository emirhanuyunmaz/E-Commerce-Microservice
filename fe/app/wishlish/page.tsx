import ProductCard from "@/components/fe/ProductCard";
import { Button } from "@/components/ui/button";


export default function Page(){
    return(<div className="max-w-7xl mx-auto flex flex-col gap-3 min-h-[80vh] my-10">
        <div className="flex justify-between my-10">
            <div>
                <p>Wishlish (10)</p>
            </div>
            <div>
                <Button variant={"outline"}>Move All To Bag</Button>
            </div>
        </div>

        <div className="flex flex-wrap gap-5">
            
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>)
}