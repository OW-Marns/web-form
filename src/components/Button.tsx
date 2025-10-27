import React from "react";
import cn from "classnames";

type ColorEnum =
  | "neutral"
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "success"
  | "danger";

type VariantEnum = "solid" | "outline" | "flat";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  color?: ColorEnum;
  variant?: VariantEnum;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  label,
  color = "primary",
  variant = "solid",
  disabled = false,
  ...restProps
}) => {
  const buttonVariantClassMap = {
    solid: {
      neutral: "bg-gray-600 hover:bg-gray-700 text-white",
      primary: "bg-sky-600 hover:bg-sky-700 text-white",
      secondary: "bg-violet-600 hover:bg-violet-700 text-white",
      info: "bg-cyan-600 hover:bg-cyan-700 text-white",
      success: "bg-emerald-600 hover:bg-emerald-700 text-white",
      warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
      danger: "bg-red-600 hover:bg-red-700 text-white",
    },
    outline: {
      neutral: "hover:bg-gray-600/10 border border-gray-600 text-gray-600",
      primary: "hover:bg-sky-600/10 border border-sky-600 text-sky-600",
      secondary: "hover:bg-violet-600/10 border border-violet-600 text-sky-600",
      info: "hover:bg-cyan-600/10 border border-cyan-600 text-sky-600",
      success: "hover:bg-emerald-600/10 border border-emerald-600 text-sky-600",
      warning: "hover:bg-yellow-600/10 border border-yellow-600 text-sky-600",
      danger: "hover:bg-red-600/10 border border-red-600 text-sky-600",
    },
    flat: {
      neutral: "hover:bg-gray-600/10 text-gray-600",
      primary: "hover:bg-sky-600/10 text-sky-600",
      secondary: "hover:bg-violet-600/10 text-sky-600",
      info: "hover:bg-cyan-600/10 text-sky-600",
      success: "hover:bg-emerald-600/10 text-sky-600",
      warning: "hover:bg-yellow-600/10 text-sky-600",
      danger: "hover:bg-red-600/10 text-sky-600",
    },
  };

  const colorClass = buttonVariantClassMap[variant][color];

  return (
    <button
      {...restProps}
      disabled={disabled}
      className={cn(
        "h-auto w-fit px-4 py-2 rounded-md capitalize",
        disabled ? "cursor-not-allowed opacity-20" : "cursor-pointer",
        colorClass,
        className
      )}
    >
      {label}
    </button>
  );
};
