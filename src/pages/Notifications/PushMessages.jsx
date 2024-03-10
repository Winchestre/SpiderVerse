import { InAppMessages } from "@/components/Notification/NotificationHeader";

const PushMessages = ({ filterNotifications }) => {    
    return (
        <section className="section">
            <InAppMessages filterNotifications={filterNotifications}/>     
        </section>
    )
}
export default PushMessages