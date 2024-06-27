import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "block h-[6.6px] py-[18px] border-0 outline-none text-[rgba(0,0,0,0.8)] text-[16px] leading-[30px] w-full bg-transparent border-b-[rgba(0,0,0,0.15)] border-b-[1px] transition-all ease-in-out",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
