import { useState } from "react";
import { OrdersTable, Title, OrdersHeader } from "@/components"
import { ordersArray } from "@/constants/data"
import { CustomTabs } from "@/components/custom";

const Reward = () => {
  const [tabValue, setTabValue] = useState('allOrders');

  const handleTabChange = (value) => {
    setTabValue(value);
  };

//   const filteredOrders = ordersArray.filter(order => {
//     switch (tabValue) {
//       case 'giftCard':
//         return true;
//       case 'mobileTopup':
//         return order.paymentStatus === 'Successful';
//       case 'billPayment':
//         return order.paymentStatus === 'Failed';
//       case 'pending':
//         return order.paymentStatus === 'Pending';
//       default:
//         return false;
//     }
//   });

  return (
    <section className="section">
      <Title>Website</Title>
      <CustomTabs
        tabs={[
          { label: 'Gift Card', value: 'giftCard' },
          { label: 'Mobile Topup', value: 'mobileTopup' },
          { label: 'Bill Payment', value: 'billPayment' },
        ]}
        onTabChange={handleTabChange}
      />
      <OrdersHeader />
      <OrdersTable filteredOrders={filteredOrders} />
    </section>
  )
}

export default Reward