import { BadgeDollarSign, Bus, CircleDollarSign, Headphones, House, Instagram, Linkedin, ShieldCheck, ShoppingBag, Twitter } from "lucide-react";

export default function Page(){
    return(<div className="max-w-7xl mx-auto mt-10 mb-10">
        <div className="flex gap-5">
            <div className="w-1/2 flex flex-col gap-3 justify-center">
                <h2 className="text-5xl font-bold text-left">Our Story</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia nesciunt minima excepturi voluptatum accusamus soluta laborum at, blanditiis vitae corporis ut officiis, consectetur expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta ipsa sapiente quibusdam quae ratione a pariatur, odio deleniti praesentium impedit atque nisi obcaecati dicta! Maxime earum iste ut quo quis sunt facilis alias provident voluptate. Hic suscipit, velit delectus quisquam laboriosam magnam quia facilis placeat sapiente quas voluptate vitae. reprehenderit illo voluptas distinctio corrupti debitis dolorem.</p>
            </div>

            <div className="w-1/2">
                <img src="/images/about.png" alt="" />
            </div>
        </div>

        <div className="flex justify-center items-center gap-3 mt-10 mb-10">

            <div className="flex flex-col justify-center items-center border border-gray-400 p-3">
                <div className="bg-secondary mx-auto rounded-full p-2 ">
                    <House size={48} color="white"/>
                </div>
                <p className="font-bold text-xl">10.5K</p>
                <p>Sallers active our site</p>
            </div>

            <div className="flex flex-col justify-center items-center border border-gray-400 p-3">
                <div className="bg-secondary mx-auto rounded-full p-2 ">
                    <CircleDollarSign size={48} color="white"/>
                </div>
                <p className="font-bold text-xl">33K</p>
                <p>Mopnthyly Produduct Sale</p>
            </div>

            <div className="flex flex-col justify-center items-center border border-gray-400 p-3">
                <div className="bg-secondary mx-auto rounded-full p-2 ">
                    <ShoppingBag size={48} color="white"/>
                </div>
                <p className="font-bold text-xl">45.5K</p>
                <p>Customer active in our site</p>
            </div>

            <div className="flex flex-col justify-center items-center border border-gray-400 p-3">
                <div className="bg-secondary mx-auto rounded-full p-2 ">
                    <BadgeDollarSign  size={48} color="white"/>
                </div>
                <p className="font-bold text-xl">25K</p>
                <p>Anual gross sale in our site</p>
            </div>

        </div>

        {/* USER CARD START */}
        <div className="flex">

            <div>
                <div>
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className="w-52 h-64"/>
                </div>
                <div>
                    <p className=" text-xl">USER NAME</p>
                    <p className="text-sm">USER POSITION</p>
                    <div className="flex  gap-3">
                        <Twitter />
                        <Instagram />
                        <Linkedin />
                    </div>
                </div>
            </div>

        </div>
        {/* USER CARD END */}


        <div className="flex justify-center items-center gap-10">
            <div  className="flex flex-col justify-center items-center">
                <div className="bg-secondary p-2 rounded-full text-white mx-auto">
                    <Bus size={48}/>
                </div>
                <div>
                    <p className="font-bold text-xl">FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
                <div className="bg-secondary p-2 rounded-full text-white mx-auto" >
                    <Headphones size={48}/>
                </div>
                <div>
                    <p className="font-bold text-xl">24/7 CUSTOMER SERVICE</p>
                    <p>Friendly 24/7 customer support</p>
                </div>
            </div>
            
            <div className="flex flex-col justify-center items-center">
                <div className="bg-secondary p-2 rounded-full text-white mx-auto">
                    <ShieldCheck size={48}/>
                </div>
                <div>
                    <p className="font-bold text-xl">MONEY BACK GUARANTEE</p>
                    <p>We reurn money within 30 days</p>
                </div>
            </div>



        </div>


    </div>)
}