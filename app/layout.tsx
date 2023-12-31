import "./globals.css";
import "remixicon/fonts/remixicon.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { default as Layout } from "@/components/layout/RootLayout";
import { cn } from "@/lib/utils/cn";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DylanSpace - Personal space of Dylan Nguyen",
  description: "My personal space on the internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(beVietnam.className, "antialiased")}>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
