import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "btn-glass text-primary-foreground hover:scale-105 active:scale-95",
        destructive:
          "bg-destructive/90 backdrop-blur-md text-destructive-foreground hover:bg-destructive border border-destructive/50 hover:shadow-lg hover:shadow-destructive/30",
        outline:
          "border-2 border-primary/30 bg-background/40 backdrop-blur-md hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20",
        secondary:
          "bg-secondary/20 backdrop-blur-md border border-secondary/30 text-secondary-foreground hover:bg-secondary/30 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/30",
        ghost: "hover:bg-accent/20 backdrop-blur-sm hover:backdrop-blur-md",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
