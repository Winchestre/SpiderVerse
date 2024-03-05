import AdminHeader from "@/components/Users/AdminHeader";
import AdminProfileTable from "@/components/Users/AdminProfileTable"
import { useState } from "react";
import { CustomTabs } from "@/components";
import PermissionTable from "@/components/Users/PermissionTable";

const AdminManagement = () => {
    const [tabValue, setTabValue] = useState('adminProfiles');

    const handleTabChange = (value) => {
        setTabValue(value);
    };
    return (
        <section className='section'>
            <AdminHeader title={tabValue}/>
            <CustomTabs
                tabs={[
                    { label: 'Admin Profiles', value: 'adminProfiles' },
                    { label: 'Permissions', value: 'permissions' },
                ]}
                onTabChange={handleTabChange}
            />
            {
                tabValue === 'adminProfiles' ? <AdminProfileTable /> : <PermissionTable />
            }
        </section>
    )
}

export default AdminManagement