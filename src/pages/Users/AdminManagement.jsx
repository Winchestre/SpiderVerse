import AdminHeader from "@/components/Users/AdminHeader";
import AdminProfileTable from "@/components/Users/AdminProfileTable"
import { useState } from "react";
import { CustomTabs } from "@/components";
import PermissionTable from "@/components/Users/PermissionTable";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

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
            <div className="flex justify-between items-center w-full text-neutral-600 mt-10">
                <h3 className="font-light text-sm">Showing 1 to <span className="font-semibold">10</span> out of <span className="font-semibold">60</span> records</h3>
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

export default AdminManagement