import { couponTableHeader, couponUserArray } from "@/constants/data"
import TableHead from "../TableHead"
import { edit, bin } from "@/assets/icons"
import { Button } from "../ui"

const CouponTable = () => {
    return (
        <table className="table-auto w-full border-b border-stone-300 divide-y divide-stone-300 mt-3">
            <TableHead headers={couponTableHeader} />
            <tbody className="text-stone-400 divide-y divide-stone-300">
                {
                    couponUserArray.map((user, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4">
                                {user.code}
                            </td>
                            <td className="py-2 px-4">
                                <Button variant="archived" size="sm">
                                    {user.couponType}
                                </Button>
                            </td>
                            <td className="py-2 px-4">
                                {user.couponValue}
                            </td>
                            <td className="py-2 px-4">
                                {user.couponLimit}
                            </td>
                            <td className="py-2 px-4">
                                {user.expiryDate}
                            </td>
                            <td className="py-2 px-4">
                                {user.labels}
                            </td>
                            <td className="py-2 px-4">
                                <div className="flex gap-2">
                                    <img
                                        src={bin}
                                        alt="edit"
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    />
                                    <img
                                        src={edit}
                                        alt="edit"
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default CouponTable