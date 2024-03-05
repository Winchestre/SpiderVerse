import { Breadcrumbs, TableHead, Title } from "@/components"
import { Button } from "@/components/ui"
import { accountDeleteTableHeaders, accountUserArray } from "@/constants/data"
import { TrashIcon } from "@radix-ui/react-icons"
import { ToggleInput } from "@/components"

const AccountDeletion = () => {
    return (
        <section className="section">
            <Title>Account Deletion</Title>
            <Breadcrumbs menu="Customer" subMenu="Account Deletion" />
            <div className="flex justify-between pt-8 pb-4">
                <Button variant="destructive" size="sm" className="px-8 flex gap-2">
                    <TrashIcon className="h-[18px] w-[18px]" />
                    Delete Account
                </Button>
                <div className="flex gap-3">
                    <h6 className="text-red-500 text-sm font-semibold">Account Deletion is Enabled</h6>
                    <ToggleInput />
                </div>
            </div>
            <h2 className="font-semibold">Account Deletion Requests</h2>
            <table className="table-auto w-full border-b border-stone-300 divide-y divide-stone-300 mt-3">
                <TableHead headers={accountDeleteTableHeaders} />
                <tbody className="text-stone-950 divide-y divide-stone-300">
                    {accountUserArray.map((user, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4">
                                <input
                                    type="checkbox"
                                    name="check"
                                    id="check"
                                />
                            </td>
                            <td className="py-2 px-4 font-semibold">Account Deletion Requests</td>
                            <td className="py-2 px-4">{user.EmailAddress}</td>
                            <td className="py-2 px-4">{user.UserID}</td>
                            <td className="py-2 px-4 flex gap-2">
                                <Button size="sm">Approve</Button>
                                <Button variant="outline2" size="sm">Decline</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}
export default AccountDeletion