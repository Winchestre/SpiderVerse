import { AdminProfileArray, adminProfileTableHeaders } from '@/constants/data'
import TableHead from '../TableHead'
import { Button } from '../ui'
import { Link } from 'react-router-dom'
import { bin } from '@/assets/icons'

const AdminProfileTable = () => {
    return (
        <table className="w-full mt-3 border-b divide-y table-auto border-stone-300 divide-stone-300">
            <TableHead headers={adminProfileTableHeaders} />
            <tbody className="divide-y text-stone-950 divide-stone-300">
                {AdminProfileArray.map((user, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2">{user.email}</td>
                        <td className="px-4 py-2">{user.name}</td>
                        <td className="px-4 py-2">
                            <Button size="icon" variant="grey" asChild>
                                <Link to={`/users/admin-management/${index}/delete`}>
                                    <img src={bin} alt="trash" />
                                </Link>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default AdminProfileTable