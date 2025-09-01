import Link from "next/link";
import Icon from "./Icon";
import { Input } from "../ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer(){
    return(<footer className="bg-primary text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 px-3 md:px-0 md:grid-cols-5 py-10 gap-5">

        <div className="border-b py-3 md:border-b-0 flex flex-col gap-3">
            <Icon/>
            <Link href={"#"} className="">Subscribe</Link>
            <p>Get %10 off your first order</p>
            <Input type="email" placeholder="Email" className="" />
        </div>
        
        <div className="border-b py-3 md:border-b-0 flex flex-col gap-3">
            <h4 className="font-bold">Support</h4>
            <p>Kahramanmaraş / Onikişubat</p>
            <p>help@example.com</p>
            <p>344 444 44 44</p>
        </div>

        <div className="border-b py-3 md:border-b-0 flex flex-col gap-3">
            <h4 className="font-bold">Account</h4>
            <p>My Account</p>
            <p>Login - Register</p>
            <p>Card</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>

        <div className="border-b py-3 md:border-b-0 flex flex-col gap-3">
            <h4 className="font-bold">Quick Link</h4>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>FQL</p>
            <p>Contact</p>
        </div>

        <div className="flex flex-col gap-3">
            <h4 className="font-bold">Download App</h4>
            <div className="flex items-center gap-3 border p-1 rounded-xl me-auto">
                <div>
                    <img src="/images/app_store.png" alt="" className="w-10 h-10" />
                </div>
                <div>
                    <p className="text-sm">Get it on</p>
                    <p className="text-xl">Google Play</p>
                </div>

            </div>
            <div className="flex items-center gap-3 border p-1 rounded-xl me-auto">
                <div>
                    <img src="/images/google_play.png" alt="" className="w-10 h-10"/>
                </div>
                <div>
                    <p className="text-sm">Download on the</p>
                    <p className="text-xl">App Store</p>
                </div>
            </div>

            <div className="flex gap-3 mx-3">
                <Facebook />
                <Twitter />
                <Instagram />
                <Linkedin />
            </div>

        </div>

        </div>

    </footer>)
}