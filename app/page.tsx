import Image from "next/image";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="container md:py-32">
      <div className="flex space-y-6 justify-center w-full">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-6xl font-bold">
            Web3 Builder through
            <br /> Frontend Excellence
          </h1>
          <p className="text-xl max-w-2xl text-muted-foreground">
            Join me on this exciting journey as we shape the future of the web
            together, one exceptional frontend experience at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
