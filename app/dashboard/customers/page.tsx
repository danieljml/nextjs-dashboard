import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

const Customer = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) => {
  const { query = '' } = searchParams;
  return (
    <div className="w-full">
    <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
      Customers
    </h1>
    <Search placeholder="Search customers..." />
    <Suspense key={query} fallback={<CustomersTableSkeleton />}>
      <CustomersTable query={query}/>
    </Suspense>
  </div>
  )
};

export default Customer;
