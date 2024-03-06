import { AnalyticsArray, analyticsTableHeaders } from "@/constants/data"
import TableHead from "../TableHead"

const AnalyticsTable = () => {
    return (
        <table className="w-full mt-3 border-b divide-y table-auto border-stone-300 divide-stone-300">
            <TableHead headers={analyticsTableHeaders} />
            <tbody className="divide-y text-zinc-400  text-sm font-light leading-tight divide-stone-300">
                {AnalyticsArray.map((user, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2">{user.productName}</td>
                        <td className="px-4 py-2">{user.category}</td>
                        <td className="px-4 py-2 text-zinc-400 text-lg font-medium">{user.country}</td>
                        <td className="px-4 py-2">{user.numberOfOrders}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default AnalyticsTable