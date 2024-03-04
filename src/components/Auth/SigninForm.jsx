import { Link } from "react-router-dom";
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import Input from "../inputs/input";

export default function SigninForm() {
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

                <Input
                    labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                    className={`h-[39px] px-3 py-3.5`}
                    label="Password"
                    name="password"
                    placeholder="password"
                    control={control}
                    errors={errors}
                    type="password"
                />
                <Button
                    type="submit"
                >
                    Login
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
