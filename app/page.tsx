import dynamic from "next/dynamic";

const DylanCard = dynamic(() => import("@/components/common/DylanCard"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ProgramingLang = dynamic(
  () => import("@/components/common/ProgramingLang"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
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
        <ProgramingLang />
      </div>
    </section>
  );
}
