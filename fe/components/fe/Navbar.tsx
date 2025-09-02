import { Input } from "../ui/input";
import Icon from "./Icon";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar(){
    return (<header className=" border-b-1 border-gray-400 ">
        <div className="max-w-7xl mx-auto flex justify-between py-3">
            <div>
                <Icon/>
            </div>
            <div className="md:w-1/3">
                <ul className="flex justify-between">
                    <li>
                        <Link href={`/`}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href={`/contact`}>Contact</Link>
                    </li>
                    <li>
                        <Link href={`/about`}>About</Link>
                    </li>
                    <li>
                        <Link href={`/login`}>Login</Link>
                    </li>
                </ul>
            </div>

            <div className="flex gap-2">
                <Input type="text" placeholder="Search" />
                <div className="flex gap-2">
                
                    <Button variant={"link"} asChild>
                        <Link href={`/wishlish`}>
                            <Heart color="black"/>
                        </Link>
                    </Button>
                    
                    <Button variant={"link"} asChild>
                        <Link href={`/buying`}>
                            <ShoppingCart  color="black"/>
                        </Link>
                    </Button>
                
                </div>
            </div>
            
        </div>
    </header>)
}