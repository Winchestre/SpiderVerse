import { Button } from "../ui";
import Input from "../inputs/input";
import { useForm } from "react-hook-form";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { menuItems } from "@/constants/data";



const EditAdminForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
    });

    const onSubmit = (data) => {
        console.log("Form values:", getValues());
        console.log("Submitted data:", data);
    };

    const renderSubMenu = (submenu) => {
        return submenu.map((subMenuItem) => (
            <Input
                key={subMenuItem.label}
                labelStyle={`text-neutral-400 text-sm font-light leading-tight my-0`}
                label={subMenuItem.label}
                className={`text-left w-6 accent-blue-900 h-6 ml-10 mt-3 border border-blue-900`}
                type="checkbox"
                control={control}
                errors={errors}
                name={subMenuItem.label.toLowerCase().replace(/\s/g, "")}
            />
        ));
    };

    return (
        <div>
            <h6 className="text-xl font-medium text-black">Personal Information</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-x-12 gap-y-4 mt-6 mb-14'>
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="First Name"
                        placeholder="First Name"
                        name="firstName"
                        control={control}
                        errors={errors}
                    />
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="Last Name"
                        placeholder="Last Name"
                        name="lastName"
                        control={control}
                        errors={errors}
                    />
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="Phone Number"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        control={control}
                        errors={errors}
                    />
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="Email Address"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div>
                    {menuItems.map((menuItem) => (
                        <div key={menuItem.label} className="mb-4">
                            <Input
                                labelStyle={`text-neutral-400 text-sm font-light leading-tight my-0`}
                                label={menuItem.label}
                                className={`text-left w-6 accent-blue-900 h-6 border border-blue-900`}
                                type="checkbox"
                                control={control}
                                errors={errors}
                                name={menuItem.label.toLowerCase().replace(/\s/g, "")}
                            />
                            {menuItem.submenu && menuItem.submenu.length > 0 && renderSubMenu(menuItem.submenu)}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-4 mt-24">
                    <Button variant="outline" className="w-[198px]">
                        Save
                        <BookmarkFilledIcon className="h-[18px] w-[18px] bg-white text-blue-900 rounded " />
                    </Button>
                    <Button variant="grey" className="w-[198px]">
                        Cancel
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default EditAdminForm