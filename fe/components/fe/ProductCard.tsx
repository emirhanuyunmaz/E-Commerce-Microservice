import { Eye, Heart, Star } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductCard(){
    return(<div className="flex flex-col">
        <div className="relative">
            <img src="https://picsum.photos/id/37/200/300" alt="" className="w-48 h-48" />
            <div className="absolute flex flex-col gap-3 top-2 right-2">
                <button className="p-1 bg-white rounded-full">
                    <Heart size={20}/>
                </button>
                <button className="p-1  bg-white rounded-full">
                    <Eye size={20} />
                </button>
            </div>
        </div>
        <div>
            <p className="font-bold">Product Name</p>
            <p className="font-bold text-secondary">$250</p>
            <div className="flex"><Star color="yellow" fill="yellow"/><Star color="yellow" fill="yellow" /><Star /><Star /><Star /></div>
        </div>
    </div>)
}