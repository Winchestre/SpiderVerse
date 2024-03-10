import { useState } from "react";
import { OrdersTable, Title, OrdersHeader } from "@/components"
import { ordersArray } from "@/constants/data"
import { CustomTabs } from "@/components/custom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Orders = () => {
  const [tabValue, setTabValue] = useState('allOrders');

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  const filteredOrders = ordersArray.filter(order => {
    switch (tabValue) {
      case 'allOrders':
        return true;
      case 'successful':
        return order.paymentStatus === 'Successful';
      case 'failed':
        return order.paymentStatus === 'Failed';
      case 'pending':
        return order.paymentStatus === 'Pending';
      default:
        return false;
    }
  });

  return (
    <section className="section">
      <Title>Orders</Title>
      <CustomTabs
        tabs={[
          { label: 'All Orders', value: 'allOrders' },
          { label: 'Successful', value: 'successful' },
          { label: 'Failed', value: 'failed' },
          { label: 'Pending', value: 'pending' },
        ]}
        onTabChange={handleTabChange}
      />
      <OrdersHeader />
      <OrdersTable filteredOrders={filteredOrders} />
      <div className="flex justify-between gap-[50%] items-center w-full text-[#ADADAD] mt-10">
                <h3 className="font-light text-sm">Showing <span className="font-semibold">{filteredOrders.length}</span> out of <span className="font-semibold">{ordersArray.length}</span> records</h3>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>    
    </section>
  )
}

export default Orders