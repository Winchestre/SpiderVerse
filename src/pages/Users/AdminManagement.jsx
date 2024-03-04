import { AdminHeader, AdminProfileTable, CustomTabs, PermissionTable } from "@/components"
import { useState } from "react";

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