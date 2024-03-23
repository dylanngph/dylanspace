import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";

import { Be_Vietnam_Pro } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { default as Layout } from "@/components/layout/RootLayout";
import { cn } from "@/lib/utils/cn";
import QueryProvider from "@/providers/query-provider";
import { Metadata } from "next/types";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="GTM-WGXPHQGS" />
      <body className={cn(beVietnam.className, "antialiased")}>
        <QueryProvider>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
