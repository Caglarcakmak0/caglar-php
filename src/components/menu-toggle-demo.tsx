"use client";

import React from "react";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";

export default function DemoOne() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-center p-8 bg-background border rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-muted rounded-md transition-colors"
      >
        <MenuToggleIcon open={open} className="size-10" duration={500} />
      </button>
    </div>
  );
}
