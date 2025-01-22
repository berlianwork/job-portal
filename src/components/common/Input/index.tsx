import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type TInputProps = {
  type?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  value?: string;
  required?: boolean;
  name?: string;
  // [key: string]: any;
};

const Input = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      type = "text",
      placeholder = "",
      className = "",
      label = "",
      error = false,
      icon,
      disabled = false,
      required = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-3 flex-grow ">
        {!!label ? (
          <label className="text-[#667085] font-semibold">{label}</label>
        ) : null}
        {/* <div
          className={twMerge(
            `h-[44px] w-full border-[2px] px-[14px] flex items-center rounded-lg gap-2 font-open-sans ${
              error ? "border-red-500" : "border-[#D0D3D9]"
            } ${disabled ? "bg-[#D0D3D9]" : "bg-white"}`,
            className
          )}
        >
          {!!icon ? icon : null}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
            {...props}
            disabled={disabled}
            required={required}
            className={`h-full flex-1 outline-none text-[#514E4E] bg-transparent `}
          />
        </div> */}
        <div className="flex items-center ">
          {!!icon ? icon : null}
          <input
            type={type}
            ref={ref}
            placeholder={placeholder}
            disabled={disabled}
            className={twMerge(
              `max-sm:text-xs p-2 rounded outline-none w-full`,
              className
            )}
            required={required}
            autoComplete="off"
            {...props}
          />
        </div>
      </div>
    );
  }
);

export default Input;
