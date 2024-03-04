import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
// import * as lodash from "lodash";

import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";


export default function Input({
    name,
    textField,
    label,
    text,
    control,
    errors,
    type = "text",
    className,
    ...props
}) {
    // const error_message = lodash.get(errors, name);
    // const hasError = !!errors && error_message;

    const [show, setShow] = useState(type !== "password");

    return (
        <div className="relative">
            {
                label && (<Label
                    htmlFor={name}
                    className="text-[22px] font-medium leading-relaxed mt-6 block"
                >
                    {label}
                </Label>)
            }

            <div className={`relative ${label && 'mt-3'}`}>

                {
                    !textField ? (
                        <Controller
                            control={control}
                            name={name}
                            render={({ field: { onChange, value=text, onBlur } }) => (
                                <input
                                    {...props}
                                    value={value}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    className={cn(
                                        "px-6 h-[55px] text-sm w-full  bg-white rounded-lg border border-zinc-400 focus:outline-none",
                                        // hasError && "border-red-500 border",
                                        className
                                    )}
                                    type={type}
                                />
                            )}
                        />
                    ) : (
                        <Controller
                            control={control}
                            name={name}
                            render={({ field: { onChange, value, onBlur } }) => (
                                <textarea
                                    {...props}
                                    value={value}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    className={cn(
                                        "px-6 min-h-[122px] text-sm w-full pl-8 pt-6 bg-white rounded-lg border border-zinc-400 focus:outline-none",
                                        // hasError && "border-red-500 border",
                                        className
                                    )}
                                />
                            )}
                        />
                    )
                }
                {type === "password" && (
                    <div
                        onClick={() => setShow(!show)}
                        className="absolute top-0 right-0 flex items-center h-full px-6 text-xl cursor-pointer text-slate-600"
                    >
                        {show ? <EyeOpenIcon /> : <EyeClosedIcon />}
                    </div>
                )}
            </div>

            {/* {hasError && (
                <p className="px-3 mt-1 text-xs font-medium text-red-500">
                    {error_message?.message}
                </p>
            )} */}
        </div>
    );
}
