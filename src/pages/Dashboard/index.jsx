import { useState } from "react";
import { DashboardHeader, Cards, StatisticsTable } from "@/components/Dashboard";
import { CustomTabs } from "@/components";
import DashboardChart from "@/components/Dashboard/DashboardChart";

const Dashboard = () => {
  const [tabValue, setTabValue] = useState('users');

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <section className="section">
      <DashboardHeader />
      <Cards />
      <DashboardChart />
      <CustomTabs
        tabs={[
          { label: 'Top Users', value: 'users' },
          { label: 'Top Countries', value: 'countries' },
        ]}
        onTabChange={handleTabChange}
      />
      {
        tabValue === 'users' ? <StatisticsTable /> : 'countries'
      }
    </section>
  )
}
export default Dashboard