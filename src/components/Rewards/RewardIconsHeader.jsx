import React from 'react'
import { search, filter } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { TextAlignJustifyIcon } from '@radix-ui/react-icons'
import { CustomPopover, CustomSelect } from '../custom'
import { useState } from 'react'

const RewardIconsHeader = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    return (
        <div className='flex items-center my-2'>
            <Input type="text" icon={search} placeholder="Search" className="border-gray-200 w-[80%]" />
            <div className='flex items-center gap-3 ml-auto'>
                <CustomSelect
                    placeholder="Select Pages"
                    options={["one", "two"]}
                    onSelect={handleSelect}
                    className="bg-blue-900"
                />
                <CustomSelect placeholder="Select All" options={['one', 'two']} onSelect={handleSelect} />
                <CustomSelect
                        placeholder="Deselect All"
                        options={['All']}
                        onSelect={handleSelect}
                        className='bg-white text-blue-900 border border-blue-900'
                    />
                <Button variant="" size="sm" className='flex items-center gap-2'>
                    <span>Filter by Country</span>
                    <img src={filter} alt="" className="text-blue-900" />
                </Button>
                <CustomPopover icon={<TextAlignJustifyIcon className="h-[30px] w-[30px]" />}>
                    <Button size="sm" variant="" className="justify-start px-2 py-1 rounded-md">Include Entire Catalog</Button>
                    <Button size="sm"variant="ghost" className="justify-start px-2 py-1 rounded-md">Include Products</Button>
                    <Button size="sm" variant="ghost" className="justify-start px-2 py-1 rounded-md">Exclude Products</Button>
                </CustomPopover>
            </div>
        </div>
    )
}

export default RewardIconsHeader