import NotificationHeader from "@/components/Notification/NotificationHeader";

const PushNotifs = ({ filterNotifications }) => {
    return (
        <section className="section">
            <NotificationHeader filterNotifications={filterNotifications} />
                           
        </section>
    )
}
export default PushNotifs