import { CustomTabs, Breadcrumbs, Title} from ".."
import { Button } from "../ui"

const NotificationHeader = ({ handleTabChange }) => {
    return (
        <>
            <div className="flex justify-between pb-6">
                <div>
                    <Title>Push Notification</Title>
                    <Breadcrumbs menu="Notification" subMenu="Push Notification" />
                </div>
                <div>
                    <Button>Create New</Button>
                </div>
            </div>
            <CustomTabs
                tabs={[
                    { label: 'All', value: 'all' },
                    { label: 'Active', value: 'active' },
                    { label: 'Inactive', value: 'inactive' },
                    { label: 'Deleted', value: 'deleted' },
                    { label: 'Archived', value: 'archived' },
                ]}
                onTabChange={handleTabChange}
            />
        </>
    )
}
export default NotificationHeader