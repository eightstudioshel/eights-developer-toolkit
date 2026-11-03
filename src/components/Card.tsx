import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  unstyled?: boolean;
};

export function Card({ className, unstyled = false, ...props }: CardProps) {
  return (
    <div
      className={cn(!unstyled && "rounded-xl border border-slate-200 bg-white shadow-sm", className)}
      {...props}
    />
  );
}
