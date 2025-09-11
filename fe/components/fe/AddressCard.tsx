import { LocationEdit } from 'lucide-react';

export default function AddressCard({
  city,
  addressName,
  country,
  postalCode,
}: {
  city: string;
  addressName: string;
  country: string;
  postalCode: string;
}) {
  return (
    <div className="cursor-pointer rounded-xl border border-gray-500 p-4 shadow-xl transition-all hover:shadow-2xl">
      <div className="flex gap-3">
        <LocationEdit />
        <p className="font-bold">Address Name</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg">{city}</p>
        <p className="text-lg">{country}</p>
        <p className="text-lg">{postalCode}</p>
      </div>
    </div>
  );
}
