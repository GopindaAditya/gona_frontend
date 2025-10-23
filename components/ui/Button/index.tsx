import { cn } from "@/lib/helpers/utils";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  icon?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-black hover:bg-primary/80 focus:ring-primary",
    outline:
      "border border-border-light dark:border-border-dark bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-border-light",
    ghost:
      "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-300",
  };

  return (
    <button className={cn(baseStyle, variants[variant], className)} {...props}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </button>
  );
}
