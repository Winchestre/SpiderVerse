import { ordersTableHeaders } from "../../constants/data"
import TableHead from "../TableHead";
import { getStyleByValue } from "@/utils/helper";


const OrdersTable = ({ filteredOrders }) => {
    return (
        <div className="overflow-x-auto scrollbar pb-5 mt-10">
            <table className="table-auto w-full border-b border-stone-300 divide-y divide-stone-300">
                <TableHead headers={ordersTableHeaders} />
                <tbody className="text-stone-950 divide-y divide-stone-300 text-nowrap">
                    {filteredOrders.map((order, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2">{order.accountID}</td>
                            <td className="px-4 py-2">{order.product}</td>
                            <td className="px-4 py-2">{order.valueOfProduct}</td>
                            <td className="px-4 py-2">{order.date}</td>
                            <td className="px-4 py-2">{order.amount}</td>
                            <td className="px-4 py-2">{order.address}</td>
                            <td className="px-4 py-2">
                                <span className={`px-2 text-base font-light rounded ${order.paymentStatus === 'Successful'
                                    ? 'text-green-500 bg-green-50'
                                    : order.paymentStatus === 'Pending'
                                        ? 'bg-yellow-50 text-yellow-500'
                                        : 'bg-red-50 text-red-600'
                                    }`}>
                                    {order.paymentStatus}
                                </span>
                            </td>
                            <td className="px-4 py-2">
                                <span className={`px-2 text-base font-light rounded border ${order.userType === 'Verified'
                                    ? 'border-neutral-500 text-neutral-500'
                                    : order.userType === 'Guest'
                                        ? 'text-slate-400 border-slate-400'
                                        : 'text-green-400 border-green-400'
                                    }`}>
                                    {order.userType}
                                </span>
                            </td>
                            <td className="px-4 py-2">{order.swtID}</td>
                            <td className="px-4 py-2">{order.number}</td>
                            <td className="px-4 py-2">{order.transactionID}</td>
                            <td className="py-3">
                                <span className={`pr-2 rounded-[100px] font-medium text-base justify-start items-center gap-1 flex
                                    ${getStyleByValue(order.paymentMode).class}
                                `}>
                                    <img src={getStyleByValue(order.paymentMode).icon} alt={order.paymentMode} />
                                    {order.paymentMode}
                                </span>
                            </td>
                            <td className="py-3">
                                <span className={`pr-2 rounded-[100px] font-medium text-base justify-start items-center gap-1 flex
                                    ${getStyleByValue(order.apiProvider).class}
                                `}>
                                    <img src={getStyleByValue(order.apiProvider).icon} alt={order.apiProvider} />
                                    {order.apiProvider}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersTable