import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-900 text-white hover:bg-blue-900/90",
        destructive:
          " border border-red-500 text-center text-red-500 bg-white  hover:bg-slate-100",
        icon: "p-2 bg-neutral-100 hover:bg-neutral-200",
        outline:
          "bg-white border-2 border-blue-900 text-blue-900 hover:bg-slate-100",
        outline2:
          "bg-neutral-300 text-blue-900 hover:bg-slate-100",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        grey: "bg-neutral-100 hover:bg-slate-100 hover:text-slate-900 text-zinc-500",
        darkerGrey: "bg-neutral-200 hover:bg-slate-100 hover:text-slate-900 text-zinc-500",
        link: "text-slate-900 underline-offset-4 hover:underline",
        active: "bg-green-500 text-white hover:bg-green-400",
        inactive: "bg-red-500 text-white hover:bg-red-400",
        deleted: "bg-stone-500 text-white hover:bg-stone-400",
        archived: "bg-yellow-600 text-white hover:bg-yellow-500",
      },
      size: {
        default: "px-[18px] py-3 text-lg",
        sm: "px-[18px] py-3 text-sm",
        xs: "py-2 text-xs",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
