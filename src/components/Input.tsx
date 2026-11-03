import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  wrapperClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, hint, error, className, wrapperClassName, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [props["aria-describedby"], hintId, errorId].filter(Boolean).join(" ") || undefined;
    return (
      <div className={cn("grid gap-1.5", wrapperClassName)}>
        {label && <label htmlFor={inputId} className="text-sm font-medium text-slate-800">{label}</label>}
        <input ref={ref} id={inputId} aria-invalid={error ? true : props["aria-invalid"]} aria-describedby={describedBy}
          className={cn("min-h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-60", error && "border-red-500 focus-visible:ring-red-500", className)} {...props} />
        {hint && !error && <p id={hintId} className="text-xs text-slate-500">{hint}</p>}
        {error && <p id={errorId} role="alert" className="text-xs text-red-600">{error}</p>}
      </div>
    );
  },
);
Input.displayName = "Input";
