import React from 'react'
import { search } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { MixerHorizontalIcon, PlusIcon } from '@radix-ui/react-icons'

const UsersHeader = () => {
    return (
        <div className='flex items-center my-2'>
            <Input type="text" icon={search} placeholder="Search" className="border-gray-200 w-[60%]" />
            <div className='flex items-center ml-auto gap-3'>
                <Button>
                    <PlusIcon className="mr-2 h-[18px] w-[18px]" />
                    Add new user
                </Button>
                <Button>By Country</Button>
                <Button variant="outline">
                    <MixerHorizontalIcon className="mr-2 h-[18px] w-[18px]" />
                    Filter
                </Button>
            </div>
        </div>
    )
}

export default UsersHeader