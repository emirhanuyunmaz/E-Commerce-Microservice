import Link from 'next/link';
import Icon from './Icon';
import { Input } from '../ui/input';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-3 py-10 md:grid-cols-5 md:px-0">
        <div className="flex flex-col gap-3 border-b py-3 md:border-b-0">
          <Icon />
          <Link href={'#'} className="">
            Subscribe
          </Link>
          <p>Get %10 off your first order</p>
          <Input type="email" placeholder="Email" className="" />
        </div>

        <div className="flex flex-col gap-3 border-b py-3 md:border-b-0">
          <h4 className="font-bold">Support</h4>
          <p>Kahramanmaraş / Onikişubat</p>
          <p>help@example.com</p>
          <p>344 444 44 44</p>
        </div>

        <div className="flex flex-col gap-3 border-b py-3 md:border-b-0">
          <h4 className="font-bold">Account</h4>
          <p>My Account</p>
          <p>Login - Register</p>
          <p>Card</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="flex flex-col gap-3 border-b py-3 md:border-b-0">
          <h4 className="font-bold">Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>FQL</p>
          <p>Contact</p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold">Download App</h4>
          <div className="me-auto flex items-center gap-3 rounded-xl border p-1">
            <div>
              <img src="/images/app_store.png" alt="" className="h-10 w-10" />
            </div>
            <div>
              <p className="text-sm">Get it on</p>
              <p className="text-xl">Google Play</p>
            </div>
          </div>
          <div className="me-auto flex items-center gap-3 rounded-xl border p-1">
            <div>
              <img src="/images/google_play.png" alt="" className="h-10 w-10" />
            </div>
            <div>
              <p className="text-sm">Download on the</p>
              <p className="text-xl">App Store</p>
            </div>
          </div>

          <div className="mx-3 flex gap-3">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </div>
    </footer>
  );
}
