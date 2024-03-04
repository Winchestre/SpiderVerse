import React from 'react'
import { search } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { TextAlignJustifyIcon, PlusIcon } from '@radix-ui/react-icons'

const CouponHeader = () => {
    return (
        <div className='flex items-center my-2'>
            <Input type="text" icon={search} placeholder="Search" className="border-gray-200 w-[60%]" />
            <div className='flex items-center ml-auto gap-3'>
                <Button>
                    <TextAlignJustifyIcon className="mr-2 h-[18px] w-[18px]" />
                    Select Pages
                </Button>
                <Button>
                    <TextAlignJustifyIcon className="mr-2 h-[18px] w-[18px]" />
                    Select All
                </Button>
                <Button variant="outline">
                    <TextAlignJustifyIcon className="mr-2 h-[18px] w-[18px]" />
                    Deselect All
                </Button>
                <Button size="sm">By Country</Button>
            </div>
        </div>
    )
}

export default CouponHeader