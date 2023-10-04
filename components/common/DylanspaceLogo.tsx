import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const DylanspaceLogo = () => {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: "link" }),
        "font-bold text-2xl hover:no-underline p-0"
      )}
    >
      <span>DylanSpace</span>
      <span className="text-4xl text-sky-500">.</span>
    </Link>
  );
};

export default DylanspaceLogo;
