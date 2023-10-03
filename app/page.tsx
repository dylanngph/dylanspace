import Image from "next/image";
import { Button } from "@nextui-org/button";
import DylanCard from "@/components/common/DylanCard";

export default function Home() {
  return (
    <section className="container md:py-32">
      <div className="flex flex-col gap-6 items-center w-full justify-between">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-7xl font-extrabold">
            Welcome to my personal space. <br />
            Let&apos;s build the future together.
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl">
            Join me on this exciting journey as we shape the future of the web
            together, one exceptional frontend experience at a time.
          </p>
        </div>
        <div>
          <DylanCard />
        </div>
      </div>
    </section>
  );
}
