'use client'

import AddAddress from "@/components/fe/AddAddress"
import AddressCard from "@/components/fe/AddressCard"

export default function Page(){

    return (<div className="w-full flex flex-col gap-3">
        <div>
         <AddAddress/>
        </div>
         <div className="flex gap-5 flex-wrap">
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
         </div>
    </div>)
}