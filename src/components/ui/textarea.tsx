import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "block h-[66px] py-[18px] text-[rgba(0,0,0,0.8)] text-[16px] leading-[30px] min-w-full bg-transparent border-b-[2px] border-b-[rgba(0,0,0,0.15)] transition-all ease-in-out focus:border-b-[rgba(0,0,0,0.1)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
