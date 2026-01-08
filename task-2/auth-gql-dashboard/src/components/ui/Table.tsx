import type { TableHTMLAttributes } from "react";

type Props = TableHTMLAttributes<HTMLTableElement>;

export function Table({ className = "", ...props }: Props) {
  return (
    <div className="overflow-x-auto">
      <table
        className={["min-w-full border-separate border-spacing-0 text-sm", className].join(" ")}
        {...props}
      />
    </div>
  );
}
