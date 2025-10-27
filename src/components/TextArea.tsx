import React from "react";
import cn from "classnames";
import type { ChecklistItem } from "../types";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    Pick<ChecklistItem, "helperText"> {
  label?: string;
  parentClassname?: string;
  labelClassname?: string;
  inputClassname?: string;
  helperClassname?: string;
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
  const {
    parentClassname,
    labelClassname,
    inputClassname,
    helperClassname,
    id = "textarea",
    label,
    helperText,
    rows = 2,
    ...restProps
  } = props;

  return (
    <div className={cn("w-full flex flex-col gap-1", parentClassname)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "block text-sm font-medium text-gray-600",
            labelClassname
          )}
        >
          {label}
        </label>
      )}

      <textarea
        {...restProps}
        id={id}
        name={id}
        rows={rows}
        className={cn(
          "outline-none w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-sky-500 focus:border-sky-500 text-sm",
          inputClassname
        )}
      />

      {helperText && (
        <span className={cn("text-xs text-gray-500", helperClassname)}>
          {helperText}
        </span>
      )}
    </div>
  );
};
