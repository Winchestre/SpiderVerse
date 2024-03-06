import { NotificationMedia, ScheduleNotification } from ".."
import CreateNotificationsHeader from "./CreateNotificationsHeader"
import NotificationOption from "./NotificationOption"

const CreateNotifications = () => {
    return (
        <section className="section">
            <CreateNotificationsHeader />
            <ScheduleNotification />
            <NotificationMedia />
            <NotificationOption />
        </section>
    )
}
export default CreateNotifications