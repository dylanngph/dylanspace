import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const DylanCard = dynamic(() => import("@/components/common/DylanCard"), {
  ssr: false,
  loading: () => (
    <Skeleton className="md:w-[610px] md:h-[219px] w-[300px] h-[200px] rounded-xl" />
  ),
});

const ProgramingLang = dynamic(
  () => import("@/components/common/ProgramingLang"),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col gap-4 items-center mt-8">
        <Skeleton className="w-[300px] h-10 rounded-xl" />
        <div className="flex items-center gap-4 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="w-16 h-16 rounded-full" />
          ))}
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <section className="container py-12">
      <div className="flex flex-col gap-6 items-center w-full justify-between">
        <div className="flex flex-col gap-4 md:text-center items-center">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-snug md:leading-normal">
            Welcome to my{" "}
            <span className="gradient-text-hero">personal space</span>. <br />
            <span className="gradient-text-hero">Let&apos;s build</span> the
            future together.
          </h1>
          <p className="lg:text-2xl text-muted-foreground max-w-3xl">
            Join me on this exciting journey as we shape the future of the web
            together, one exceptional frontend experience at a time.
          </p>
        </div>
        <div className="mt-9">
          <DylanCard />
        </div>
        <ProgramingLang />
      </div>
    </section>
  );
}
