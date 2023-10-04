"use client";

import DylanCard from "@/components/common/DylanCard";
import Hydrated from "@/components/common/hydration/Hydrated";
import { PROGRAMING_LANG } from "@/lib/constants/programing-lang";
import { Image } from "@nextui-org/image";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="container py-28">
      <div className="flex flex-col gap-6 items-center w-full justify-between">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-4xl lg:text-7xl font-extrabold">
            Welcome to my{" "}
            <span className="gradient-text-hero">personal space</span>. <br />
            <span className="gradient-text-hero">Let&apos;s build</span> the
            future together.
          </h1>
          <p className="text-lg lg:text-2xl text-muted-foreground max-w-3xl">
            Join me on this exciting journey as we shape the future of the web
            together, one exceptional frontend experience at a time.
          </p>
        </div>
        <div className="mt-9">
          <DylanCard />
        </div>
        <Hydrated>
          <div className="mt-8 flex flex-col items-center gap-6 text-center">
            <p className="text-muted-foreground">
              My programing languages of choice are:
            </p>
            <div className="flex items-center gap-6 flex-wrap lg:w-[800px] justify-between">
              {PROGRAMING_LANG.map((lang) => (
                <Image
                  key={lang.value}
                  src={isDark && lang.iconLight ? lang.iconLight : lang.icon}
                  alt={lang.name}
                  width={64}
                  height={64}
                  className="h-[64px]"
                />
              ))}
            </div>
          </div>
        </Hydrated>
      </div>
    </section>
  );
}
