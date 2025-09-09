'use client';
import { Eye, Heart, Star } from 'lucide-react';
import { Button } from '../ui/button';

export default function ProductCard() {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img src="https://picsum.photos/id/37/200/300" alt="" className="h-48 w-48" />
        <div className="absolute top-2 right-2 flex flex-col gap-3">
          <button className="rounded-full bg-white p-1">
            <Heart size={20} />
          </button>
          <button className="rounded-full bg-white p-1">
            <Eye size={20} />
          </button>
        </div>
      </div>
      <div>
        <p className="font-bold">Product Name</p>
        <p className="text-secondary font-bold">$250</p>
        <div className="flex">
          <Star color="yellow" fill="yellow" />
          <Star color="yellow" fill="yellow" />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );
}
