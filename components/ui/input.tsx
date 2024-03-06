import * as React from "react";

import { cn } from "@/lib/utils";

interface BaseInputProps {
  variant?: "text" | "dropdown";
  type?: string;
  className?: string;
}

type TextInputProps = BaseInputProps &
  React.InputHTMLAttributes<HTMLInputElement>;
type DropdownInputProps = BaseInputProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & { options: string[] };
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "text" | "dropdown";
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLSelectElement,
  TextInputProps | DropdownInputProps
>(({ className, variant, type, ...props }, ref) => {
  if (variant === "dropdown") {
    const dropdownProps = props as DropdownInputProps;
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",
          className
        )}
        ref={ref as React.Ref<HTMLSelectElement>}
        {...dropdownProps}
      >
        <option value="" className={cn("text-gray-200")}>
          Select your insitution of Learning
        </option>
        {dropdownProps.options.map((option, index: number) => (
          <option key={index} value={option} className={cn("py-4")}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",
        className
      )}
      ref={ref as React.Ref<HTMLInputElement>}
      {...(props as TextInputProps)}
    />
  );
});
Input.displayName = "Input";

export { Input };
