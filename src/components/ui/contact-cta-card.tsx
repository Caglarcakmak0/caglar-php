"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

interface ContactCTACardProps {
  className?: string;
  email?: string;
}

const ContactCTACard = ({
  className,
  email = "hello@yourname.com",
}: ContactCTACardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl",
        "bg-white dark:bg-slate-900",
        "border border-slate-200/50 dark:border-slate-700/50",
        "p-6",
        className
      )}
    >
      {/* Header */}
      <h3 className="mb-6 text-center text-xl font-medium text-slate-900 dark:text-white">
        Let&apos;s work together
        <br />
        on your next project
      </h3>

      {/* Email Button */}
      <button
        onClick={handleCopy}
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-2.5 transition-all",
          "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700",
          "border border-slate-200 dark:border-slate-600",
          "text-slate-700 dark:text-slate-300"
        )}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span className="text-sm font-medium">{email}</span>
      </button>
    </div>
  );
};

export { ContactCTACard };
export type { ContactCTACardProps };
