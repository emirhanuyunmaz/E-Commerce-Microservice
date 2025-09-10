import { LocationEdit } from "lucide-react";

export default function AddressCard(){
    return(<div className="shadow-xl p-4 border border-gray-500 rounded-xl hover:shadow-2xl transition-all cursor-pointer">
        <div className="flex gap-3">
            <LocationEdit/>
            <p  className="font-bold">Address Name</p>
        </div>
        <div className="flex flex-col gap-1">
            <p className="text-lg">City</p>
            <p className="text-lg">Country</p>
            <p className="text-lg">46000</p>
        </div>
    </div>)
}