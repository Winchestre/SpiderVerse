import { Title, UsersHeader, UsersTable } from "@/components"

const Users = () => {
  return (
    <div className="section">
        <Title>Users</Title>
        <UsersHeader />
        <UsersTable />
    </div>
  )
}

export default Users