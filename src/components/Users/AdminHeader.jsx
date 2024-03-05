import React from 'react'
import { search } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { PlusIcon } from '@radix-ui/react-icons'
import Title from '../Title'
import { Breadcrumbs } from '..'
import { Link } from 'react-router-dom'

const AdminHeader = ({ title }) => {
    return (
        <div>
            <div className='mb-5'>
                <Title>Admin Management</Title>
                <Breadcrumbs menu="Users" subMenu="Admin Management" nextMenu={`${title === 'adminProfiles' ? 'Admin Profiles' : 'Permissions'}`} />
            </div>
            <div className='flex items-center justify-between my-2'>
                <Input type="text" icon={search} placeholder="Search" className="border-gray-200 w-[60%]" />
                <Button asChild>
                    <Link to="/users/admin-management/create">
                        <PlusIcon className="mr-2 h-[18px] w-[18px]" />
                        Add new Admin
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default AdminHeader