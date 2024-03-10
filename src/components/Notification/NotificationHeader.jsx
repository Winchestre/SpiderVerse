import { useNavigate } from "react-router-dom"
import { CustomTabs, Breadcrumbs, Title} from ".."
import { Button } from "../ui"
import { useState } from "react"
import { notificationArray } from "@/constants/data"
import { NotificationTable } from ".."
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { PlusIcon } from "@radix-ui/react-icons"

const NotificationHeader = () => {
    const navigate = useNavigate();

    const [tabValue, setTabValue] = useState("All");

    const handleTabChange = (value) => {
        setTabValue(value);
    };

    const filterNotifications = notificationArray.filter(checkStatus => {
        switch(tabValue) {
            case 'All':
                return true;
            case 'Active':
                return checkStatus.status === 'Active';
            case 'Inactive':
                return checkStatus.status === 'In Active';
            case 'Deleted':
                return checkStatus.status === 'Deleted';
            case 'Archived':
                return checkStatus.status === 'Archived';
            default:
                return false;
        }
    });

    return (
        <>
            <div className="flex justify-between items-center pb-6">
                <div>
                    <Title>Push Notification</Title>
                    <Breadcrumbs menu="Notification" subMenu="Push Notifications" nextMenu={tabValue} />
                </div>
                <div>
                    <Button onClick={()=>{navigate('/notifications/create-notifications')}}>
                        
                        Create New
                        <PlusIcon
                            className="ml-2 bg-white text-blue-900 rounded-sm"
                        />
                    </Button>
                </div>
            </div>
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
            </div>          
            
        </>
    )
}
export default NotificationHeader

export const InAppMessages = () => {
    const navigate = useNavigate();

    const [tabValue, setTabValue] = useState("All");

    const handleTabChange = (value) => {
        setTabValue(value);
    };

    const filterNotifications = notificationArray.filter(checkStatus => {
        switch(tabValue) {
            case 'All':
                return true;
            case 'Active':
                return checkStatus.status === 'Active';
            case 'Inactive':
                return checkStatus.status === 'In Active';
            case 'Deleted':
                return checkStatus.status === 'Deleted';
            case 'Archived':
                return checkStatus.status === 'Archived';
            default:
                return false;
        }
    });
   
    return (
        <>
            <div className="flex justify-between items-center pb-6">
                <div>
                    <Title>In App Messages</Title>
                    <Breadcrumbs menu="Notification" subMenu="Push Messages" nextMenu={tabValue} />
                </div>
                <div>
                    <Button onClick={()=>{navigate('/notifications/create-notifications')}}>Create New
                        <PlusIcon
                            className="ml-2 bg-white text-blue-900 rounded-sm"
                        />
                    </Button>
                </div>
            </div>
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
            </div>          
        </>
    )
} 