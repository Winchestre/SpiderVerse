import { Link } from "react-router-dom";
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import Input from "../inputs/input";
import { CustomSelect } from "../custom";
import { Label } from "@radix-ui/react-label";

export default function SignupForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    //   const { isPending, mutate } = useLogin();

    const onSubmit = (data) => {
        // mutate(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full">
            <div className="flex flex-col gap-4">
                <div className="grid gap-2 grid-cols-2">
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
                </div>
                <Input
                    labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                    className={`h-10 px-3 py-3.5`}
                    label="Country"
                    placeholder="Country"
                    name="country"
                    control={control}
                    errors={errors}
                />
                <Input
                    labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                    className={`h-10 px-3 py-3.5`}
                    label="Email Address"
                    type="email"
                    placeholder="Email Address"
                    name="email"
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
                <div>
                    <Label htmlFor="role" className="text-sm font-light leading-tight text-neutral-400">Role</Label>
                    <CustomSelect options={['Admin', 'Super Admin']} defaultValue='Admin' name={`role`} className="mt-2 w-full text-base font-light border rounded-lg border-zinc-400 text-stone-950" />
                </div>
                <div className="grid gap-2 grid-cols-2">
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-10 px-3 py-3.5`}
                        label="Password"
                        name="password"
                        placeholder="password"
                        control={control}
                        errors={errors}
                        type="password"
                    />
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-10 px-3 py-3.5`}
                        label="Confirm Password"
                        name="confirmPassword"
                        control={control}
                        errors={errors}
                        type="password"
                    />
                </div>

                <Button
                    type="submit"
                >
                    Register
                </Button>
                <p className="text-center text-zinc-900 text-sm font-normal leading-snug">
                    Don’t have an account yet?{" "}
                    <Link
                        to="/auth/sign-up"
                        className=" text-indigo-800 text-sm font-semibold underline leading-snug"
                    >
                        Create one
                    </Link>
                </p>
            </div>
        </form>);
}
