import { cn } from "../../../lib/helpers/utils";
import React from "react";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm p-6",
        className
      )}
    >
      {children}
    </div>
  );
}