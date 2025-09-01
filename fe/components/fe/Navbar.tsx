import { Input } from "../ui/input";
import Icon from "./Icon";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar(){
    return (<header className=" border-b-1 border-gray-400 ">
        <div className="max-w-7xl mx-auto flex justify-between py-3">
            <div>
                <Icon/>
            </div>
            <div className="md:w-1/3">
                <ul className="flex justify-between">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Signup</li>
                </ul>
            </div>

            <div className="flex gap-2">
                <Input type="text" placeholder="Search" />
                <div className="flex gap-2">
                
                    <Button variant={"link"}>
                        <Heart color="black"/>
                    </Button>
                    
                    <Button variant={"link"}>
                        <ShoppingCart  color="black"/>
                    </Button>
                
                </div>
            </div>
            
        </div>
    </header>)
}