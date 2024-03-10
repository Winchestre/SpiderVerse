import { UsersTable } from ".."
import { EligibleUserHeader } from "./TopHeader"
import { search } from "@/assets/icons"
import { CustomSelect } from '../custom'
import { Input, Button } from "@/components/ui"
import { useState } from 'react'

const EligibleUsers = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    return (
        <section className="section">
            <EligibleUserHeader />
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
                        <span>Country</span>
                    </Button>
                </div>
            </div>
            <UsersTable />
            
        </section>
    )
}
export default EligibleUsers