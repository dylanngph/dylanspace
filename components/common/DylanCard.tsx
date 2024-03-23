import React from "react";

import Image from "next/image";
import { socials } from "@/lib/constants/socials";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { buttonVariants } from "../ui/button";

const DylanCard = () => {
  return (
    <div className="dark:bg-foreground/5 max-w-[610px] backdrop-blur p-4 rounded-xl shadow">
      <div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="DylanAvatar"
              width={200}
              height={200}
              className="object-cover shadow-md rounded-lg w-full h-full"
              src="/dylan-avatar.png"
              quality={100}
              priority
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-3xl">
                  Web3 Builder through Frontend Excellence
                </h3>
                <p className="text-muted-foreground">
                  {`I'm a frontend developer, passionate about building
                    exceptional web3 experiences.`}
                </p>
                <div className="flex items-center space-x-4">
                  {socials.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                      )}
                    >
                      <i className={cn(social.icon, "text-xl")} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DylanCard;
