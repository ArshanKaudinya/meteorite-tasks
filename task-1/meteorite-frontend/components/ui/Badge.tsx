import * as React from "react";
import { cn } from "@/lib/cn";

type Tone = "neutral" | "soft";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
};

export function Badge({ className, tone = "soft", ...props }: Props) {
  const tones: Record<Tone, string> = {
    neutral: "bg-white text-slate-700 ring-1 ring-slate-200",
    soft: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
