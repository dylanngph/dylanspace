import React from "react";
import DylanspaceLogo from "../common/DylanspaceLogo";
import { socials } from "@/lib/constants/socials";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { buttonVariants } from "../ui/button";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full py-12 flex flex-col md:flex-row items-end container">
      <section className="flex flex-col gap-2 items-start">
        <DylanspaceLogo />
        <p className="text-sm text-gray-500">
          © 2023 DylanSpace by Dylan Nguyen, all rights reserved.
        </p>
      </section>
      <section className="ml-auto">
        <div className="flex items-center space-x-4 flex-wrap">
          {socials.map((social, index) => (
            <Link key={index} href={social.href} passHref legacyBehavior>
              <a
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                )}
              >
                <i className={cn(social.icon, "text-xl")} />
              </a>
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
