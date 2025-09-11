'use client';

import AddAddress from '@/components/fe/AddAddress';
import AddressCard from '@/components/fe/AddressCard';
import { useGetAddressListQuery } from '@/store/customer/customerApi';
import { useEffect } from 'react';

export default function Page() {
  const getAddressList = useGetAddressListQuery('');
  useEffect(() => {
    if (getAddressList.isSuccess) {
      console.log('ADDRESS LIST ::', getAddressList.data);
    }
  }, [getAddressList.isSuccess, getAddressList.isError, getAddressList.isFetching]);
  return (
    <div className="flex w-full flex-col gap-3">
      <div>
        <AddAddress />
      </div>
      <div className="flex flex-wrap gap-5">
        {getAddressList.isSuccess &&
          getAddressList.data.map((data: any) => <AddressCard key={data._id} {...data} />)}
        {getAddressList.isSuccess && getAddressList.data.length == 0 && <p>Address Not Found</p>}
      </div>
    </div>
  );
}
