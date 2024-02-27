"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { PROGRAMING_LANG } from "@/lib/constants/programing-lang";

const ProgramingLang = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="mt-8 flex flex-col items-center gap-6 text-center">
      <p className="text-muted-foreground">
        My programing languages of choice are:
      </p>
      <div className="flex items-center gap-6 flex-wrap lg:w-[800px] md:justify-between">
        {PROGRAMING_LANG.map((lang) => (
          <Image
            key={lang.value}
            src={isDark && lang.iconLight ? lang.iconLight : lang.icon}
            alt={lang.name}
            width={64}
            height={64}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramingLang;
