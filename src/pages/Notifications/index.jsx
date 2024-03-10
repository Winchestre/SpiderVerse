// import { NotificationHeader, NotificationTable } from "@/components";
// import { notificationArray } from "@/constants/data";
// import { useState } from "react"
// import { CustomTabs } from "@/components";
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination";

const Notifications = () => {
    const [tabValue, setTabValue] = useState('');

    const handleTabChange = (value) => {
        setTabValue(value);
    };

    const filterNotifications = notificationArray.filter((notification) => {
        switch (tabValue) {
            case 'Active':
                return notification.status === 'Active';
            case 'Inactive':
                return notification.status === 'In Active';
            case 'Deleted':
                return notification.status === 'Deleted';
            case 'Archive':
                return notification.status === 'Archived';
            default:
                return false;
        }
    })
    return (
        <>
            {/* <NotificationHeader />
            <div className="mt-8">
            <CustomTabs
                    tabs={[
                        { label: 'All', value: 'All' },
                        { label: 'Active', value: 'Active' },
                        { label: 'Inactive', value: 'Inactive' },
                        { label: 'Deleted', value: 'Deleted' },
                        { label: 'Archived', value: 'Archived' },
                    ]}
                    onTabChange={handleTabChange}
                />
            </div>
            <NotificationTable filterNotifications={filterNotifications} />
            <div className="flex justify-between gap-[50%] items-center w-full text-[#ADADAD] mt-10">
                <h3 className="font-light text-sm">Showing 1 to <span className="font-semibold">{filterNotifications.length}</span> out of <span className="font-semibold">{notificationArray.length}</span> records</h3>
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
            </div>             */}

        </>
    )
}
export default Notifications