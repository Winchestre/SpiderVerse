import { AdminProfileArray, permissionTableHeaders } from "@/constants/data";
import TableHead from "../TableHead";
import { Button } from '../ui'
import { Link } from 'react-router-dom'
import { edit } from '@/assets/icons'
import { ToggleInput } from "..";

const PermissionTable = () => {
    return (
        <table className="w-full mt-3 border-b divide-y table-auto border-stone-300 divide-stone-300">
            <TableHead headers={permissionTableHeaders} />
            <tbody className="divide-y text-stone-950 divide-stone-300">
                {AdminProfileArray.map((user, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2">{user.email}</td>
                        <td className="px-4 py-2">{user.name}</td>
                        <td className="flex flex-col justify-center px-4 py-2">
                            <ToggleInput id={index} />
                        </td>
                        <td className="px-4 py-2">
                            <Button size="icon" variant="grey" asChild>
                                <Link to={`/users/admin-management/${index}/edit`}>
                                    <img src={edit} alt="edit" />
                                </Link>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PermissionTable;
