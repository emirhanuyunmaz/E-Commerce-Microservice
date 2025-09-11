'use client';
import { Input } from '../ui/input';
import Icon from './Icon';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import { isValidJWT } from 'zod/v4/core';
import { useEffect, useState } from 'react';

export default function Navbar() {
  let token = getCookie('token') ?? '';
  const isValid = isValidJWT(token as string);

  const [validate, setValidate] = useState(false);
  useEffect(() => {
    setValidate(isValid);
  }, [token]);

  return (
    <header className="border-b-1 border-gray-400">
      <div className="mx-auto flex max-w-7xl justify-between py-3">
        <div>
          <Icon />
        </div>
        <div className="md:w-1/3">
          <ul className="flex justify-between">
            <li>
              <Link href={`/`}>Home</Link>
            </li>

            <li>
              <Link href={`/contact`}>Contact</Link>
            </li>
            <li>
              <Link href={`/about`}>About</Link>
            </li>
            {!validate ? (
              <>
                <li>
                  <Link href={`/login`}>Login</Link>
                </li>
              </>
            ) : (
              <li>
                <Link href={`/account`}>Account</Link>
              </li>
            )}
          </ul>
        </div>

        <div className="flex gap-2">
          <Input type="text" placeholder="Search" />
          <div className="flex gap-2">
            <Button variant={'link'} asChild>
              <Link href={`/wishlish`}>
                <Heart color="black" />
              </Link>
            </Button>

            <Button variant={'link'} asChild>
              <Link href={`/buying`}>
                <ShoppingCart color="black" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
