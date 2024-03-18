"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { MAIN_NAVIGATION } from "@/lib/constants/navigation";
import { usePathname } from "next/navigation";
import DylanspaceLogo from "../common/DylanspaceLogo";

const ThemeSwitcher = dynamic(() => import("./darkmode-button"), {
  ssr: false,
});

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      isBlurred={false}
      classNames={{
        base: "container bg-transparent",
        wrapper: "px-0",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <DylanspaceLogo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex space-x-6" justify="center">
        {MAIN_NAVIGATION.map((nav, index) => {
          const isActive =
            nav.path === "/"
              ? pathname === nav.path
              : pathname.startsWith(nav.path);
          return (
            <NavbarItem
              key={`${nav.name}-${index}`}
              className={`text-foreground/60 data-[active=true]:text-foreground hover:text-foreground font-normal data-[active=true]:font-normal transition-all delay-50`}
              isActive={isActive}
            >
              <Link href={nav.path}>{nav.name}</Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-foreground text-background" href="#">
            <i className="ri-send-plane-fill" />
            Contact me
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {MAIN_NAVIGATION.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.path}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Topbar;
