import React from 'react'
import { search, filter, EUR } from "@/assets/icons"
import { Input, Button } from "@/components/ui"
import { TextAlignJustifyIcon } from '@radix-ui/react-icons'
import { CustomPopover, CustomSelect } from '../custom'
import { useState } from 'react'
import US from 'country-flag-icons/react/3x2/US'
import NG from 'country-flag-icons/react/3x2/NG'
import FR from 'country-flag-icons/react/3x2/FR'
import DE from 'country-flag-icons/react/3x2/DE'
import ES from 'country-flag-icons/react/3x2/ES'

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
                    {/* <img src={filter} alt="" className="text-blue-900" /> */}
                    <CustomPopover icon={<img src={filter} className='h-[20px] w-[20px]' />}>
                        {/* {
                            accountsData.map((data, index) => (
                                <div key={index} className='flex flex-col gap-1'>
                                    <Button size="xs" variant="outline3" className="justify-start p-1 rounded-md flex gap-1">
                                        <img src={data.icons} alt='icons' className='h-[20px] w-[20px]' /><span>{data.region}</span>
                                    </Button>
                                </div>
                                           
                            ))
                        } */}
                        <div className=''>
                            <Button size="xs" variant="outline3" className="justify-start py-1 px-2 rounded-md flex gap-2">
                                <US alt='icons' className='h-[20px] w-[20px]' />
                                <span>United States</span>
                            </Button>
                            <Button size="xs" variant="outline3" className="justify-start py-1 px-2 rounded-md flex gap-2">
                                <NG alt='icons' className='h-[20px] w-[20px]' />
                                <span>Nigeria</span>
                            </Button>
                            <Button size="xs" variant="outline3" className="justify-start py-1 px-2 rounded-md flex gap-2">
                                <FR alt='icons' className='h-[20px] w-[20px]' />
                                <span>France</span>
                            </Button>
                            <Button size="xs" variant="outline3" className="justify-start py-1 px-2 rounded-md flex gap-2">
                                <DE alt='icons' className='h-[20px] w-[20px]' />
                                <span>Germany</span>
                            </Button>
                            <Button size="xs" variant="outline3" className="justify-start py-1 px-2 rounded-md flex gap-2">
                                <ES alt='icons' className='h-[20px] w-[20px]' />
                                <span>Spain</span>
                            </Button>
                        </div>
                        {/* <Button size="sm" variant="" className="justify-start px-2 py-1 rounded-md">
                        </Button>
                        <Button size="sm" variant="ghost" className="justify-start px-2 py-1 rounded-md">Include Products</Button>
                        <Button size="sm" variant="ghost" className="justify-start px-2 py-1 rounded-md">Exclude Products</Button> */}
                    </CustomPopover>
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