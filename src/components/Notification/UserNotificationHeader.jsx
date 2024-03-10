import { search } from "@/assets/icons";
import { Input, Button } from "@/components/ui";
import { CustomSelect } from "../custom";
import Title from "../Title";
import { Breadcrumbs } from "..";
import { useState } from "react";

const UserNotificationHeader = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelect = (value) => {
        setSelectedValue(value);
    };
    return (
        <>
            <Title>Users</Title>
            <Breadcrumbs menu="Notifications" subMenu="Push Notifications" nextMenu="Create" subNextMenu="Users"  />
            <div className="flex items-center my-2 pt-3">
                <Input
                    type="text"
                    icon={search}
                    placeholder="Search"
                    className="border-gray-200 w-[60%]"
                />
                <div className="flex items-center ml-auto gap-3">
                    <CustomSelect
                        placeholder="Select Pages"
                        options={["one", "two"]}
                        onSelect={handleSelect}
                        className="bg-blue-900"
                    />
                    <CustomSelect
                        placeholder="Select All"
                        options={["one", "two"]}
                        onSelect={handleSelect}
                    />
                    <CustomSelect
                        placeholder="Deselect All"
                        options={['All']}
                        onSelect={handleSelect}
                        className='bg-white text-blue-900 border border-blue-900'
                    />
                    <Button className='bg-blue-900'>Country</Button>
                </div>
            </div>
        </>
        
    );
};

export default UserNotificationHeader;
