import { Breadcrumbs, CustomTabs, RewardFilter, Title } from "@/components"
import RewardCards from "@/components/Rewards/RewardCards";
import RewardIconsHeader from "@/components/Rewards/RewardIconsHeader";
import { useState } from "react"

const ExcludeProducts = () => {
    const [tabValue, setTabValue] = useState('all');

    const handleTabChange = (value) => {
        setTabValue(value);
    };

    return (
        <section className="section">
            <Title>Website</Title>
            <Breadcrumbs menu="Reward" subMenu="Exclude Product" />
            <CustomTabs
                tabs={[
                    { label: 'Gift Card', value: 'giftCard' },
                    { label: 'Mobile Topup', value: 'mobileTopup' },
                    { label: 'Bill Payment', value: 'billPayment' },
                ]}
                onTabChange={handleTabChange}
            />
            <RewardIconsHeader />
            <div className="flex justify-end">
                <RewardFilter />
                <RewardCards />
            </div>
            
        </section>
    )
}
export default ExcludeProducts