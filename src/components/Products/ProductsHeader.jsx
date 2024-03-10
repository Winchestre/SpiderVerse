import { customerArray, ordersArray } from "@/constants/data"
import { useState } from "react"
import Title from "../Title"
import { CustomTabs } from ".."

const ProductWebsite = () => {
    const [tabValue, setTabValue] = useState('Guest User');

    const handleTabChange = (value) => {
        setTabValue(value);
    }

    const filteredUsers = customerArray.filter(user => {
        switch(tabValue) {
            case 'Guest User':
                return user.userType === 'Guest';
            case 'Registered User':
                return user.userType === 'Registered';
            case 'Verified User':
                return user.userType === 'Verified';
            default:
                return false;
        }
    })
    return (
        <section>
            <Title>Website</Title>
            <CustomTabs
                tabs={[
                    { label: "Guest Users", value: "Guest User" },
                    { label: "Registered Users", value: "Registered User" },
                    { label: "Verified Users", value: "Verified User" },
                ]}
                onTabChange={handleTabChange}
            />
        </section>
    )
}
export default ProductWebsite

 export const ProductStore = () => {
    const [tabValue, setTabValue] = useState('Sochitel');

    const handleTabChange = (value) => {
        setTabValue(value);
    };

    const filterOrders = ordersArray.filter(order => {
        switch (tabValue) {
            case 'Sochitel':
                return order.apiProvider === 'Sochitel';
            case 'Xoxoday':
                return order.apiProvider === 'Xoxoday';
            case 'Ding connect':
                return order.apiProvider === 'Ding connect';
            case 'Reloadly':
                return order.apiProvider === 'Reloadly';
            default:
                return false;
        }
    })
    return (
        <section className="">
            <Title>Stores</Title>
            <CustomTabs
                tabs={[
                    {label: 'Sochitel', value: 'Sochitel'},
                    {label: 'Xoxoday', value: 'Xoxoday'},
                    {label: 'Ding Connect', value: 'Ding Connect'},
                    {label: 'Reloadly', value: 'Reloadly'},
                ]}
                onTabChange={handleTabChange}
            />
        </section>
    )
}