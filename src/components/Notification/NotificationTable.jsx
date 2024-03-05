import TableHead from "../TableHead";
import { notificationTableHeaders } from "@/constants/data";
import { Button } from "../ui";
import { Archive, LucideDelete } from "lucide-react";

const NotificationTable = ({ filterNotifications }) => {
    return (
        <table className="table-auto w-full border-b border-stone-300 divide-y divide-stone-300 mt-3">
            <TableHead headers={notificationTableHeaders} />
            <tbody className="text-stone-950 divide-y divide-stone-300">
                {
                    filterNotifications.map((user, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4">
                                <Button size="sm" variant={`${user.status === 'Active' ?
                                    'active'
                                    :
                                    user.status === 'In Active' ?
                                        'inactive'
                                        :
                                        user.status === 'Deleted' ?
                                            'deleted'
                                            :
                                            'archived'
                                    }`}>{user.status}</Button>
                            </td>
                            <td className="py-2 px-4">
                                <h3 className="text-red-500 font-semibold">{user.title}</h3>
                                <p className="text-stone-400 font-light text-sm">{user.msg}</p>
                            </td>
                            <td className="py-2 px-4">
                                <h3 className="font-semibold">{user.delivery}</h3>
                                <h4 className="text-stone-400 font-light text-sm">{user.percentage}%</h4>
                            </td>
                            <td>
                                <h3 className="font-semibold">{user.open}</h3>
                                <h4 className="text-stone-400 font-light text-sm">{user.percentage2}%</h4>
                            </td>
                            <td className="py-2 px-4">
                                <div className="flex gap-3">
                                    <Archive className="inline-block text-xs" />
                                    <LucideDelete className="inline-block text-xs" />
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default NotificationTable