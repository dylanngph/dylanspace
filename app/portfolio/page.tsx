import React from "react";
import Image from "next/image";
import PortAccordions from "./_components/port-accordions";

const PortfolioPage = () => {
  return (
    <div className="container grid sm:grid-cols-2 gap-10 py-20">
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Image
            src="/dylan.png"
            alt="Dylan Picture"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-4xl">Dylan Nguyen</h2>
            <p className="text-lg">
              Web3 Builder (Developer, Designer, Community Builder)
            </p>
          </div>
        </div>
        <p className="text-muted-foreground">
          I possess extensive expertise as a seasoned Builder, capable of
          seamlessly integrating my skills across multiple domains within a
          company. My proficiency spans across software development, marketing,
          product design, and building community, enabling me to contribute
          comprehensively to various aspects of the organization. Additionally,
          I have a strong command over diverse web frameworks and blockchain
          industry, empowering me to tackle complex challenges efficiently.
          Whether I&apos;m working independently on projects or collaborating
          within a dynamic team, I consistently demonstrate effective
          self-management and foster a productive working environment.
        </p>

        <PortAccordions />
      </section>
    </div>
  );
};

export default PortfolioPage;
