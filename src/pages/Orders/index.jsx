import { useState } from "react";
import { OrdersTable, Title, OrdersHeader } from "@/components"
import { ordersArray } from "@/constants/data"
import { CustomTabs } from "@/components/custom";

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
    </section>
  )
}

export default Orders