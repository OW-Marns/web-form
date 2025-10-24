import React from "react";
import cn from "classnames";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      id={props.id}
      className={cn(
        "CARD",
        "w-full p-6 bg-white border border-b-2 border-gray-200 rounded-lg space-y-3",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
