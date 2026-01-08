"use client";

import * as React from "react";
import { cn } from "@/lib/cn";
import { ChevronRightIcon } from "@/components/icons";

type Props = {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  scrollAmount?: number;
};

export function HorizontalScroll({
  children,
  className,
  scrollAmount = 560,
}: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const onNext = () => {
    ref.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={ref}
        className="no-scrollbar flex gap-6 overflow-x-auto pb-2 pr-10 snap-x snap-mandatory"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white ring-1 ring-slate-200 shadow-sm hover:bg-slate-50 active:bg-slate-100"
      >
        <ChevronRightIcon className="h-5 w-5 text-slate-700" />
      </button>
    </div>
  );
}
