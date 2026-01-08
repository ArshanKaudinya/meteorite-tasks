import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className = "", ...props }: Props) {
  return (
    <label className="block">
      {label ? <div className="mb-1 text-sm font-medium text-slate-700">{label}</div> : null}
      <input
        className={[
          "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none",
          "focus:border-slate-400 focus:ring-2 focus:ring-slate-200",
          className,
        ].join(" ")}
        {...props}
      />
    </label>
  );
}
