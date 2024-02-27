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
import { MAIN_NAVIGATION } from "@/lib/constants/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { buttonVariants } from "../ui/button";
import { ThemeSwitcher } from "./darkmode-button";
import DylanspaceLogo from "../common/DylanspaceLogo";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const pathname = usePathname();

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Topbar;
