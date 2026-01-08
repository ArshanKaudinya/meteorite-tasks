import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: Props) {
  return (
    <div
      className={["rounded-xl border border-slate-200 bg-white shadow-sm", className].join(" ")}
      {...props}
    />
  );
}
