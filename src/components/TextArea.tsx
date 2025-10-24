import React from "react";
import type { ChecklistItem } from "../types";
import cn from "classnames";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    Pick<ChecklistItem, "helperText"> {
  label?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  label,
  helperText,
  rows = 2,
  ...restProps
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label className="block text-sm font-medium text-gray-600">
          Notes:
        </label>
      )}
      <textarea
        {...restProps}
        rows={rows}
        className={cn(
          "outline-none w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-sky-500 focus:border-sky-500 text-sm",
          className
        )}
      />
      {helperText && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
    </div>
  );
};
