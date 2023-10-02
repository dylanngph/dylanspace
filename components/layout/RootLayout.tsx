import { FC, Fragment } from "react";
import Topbar from "../shared/topbar";
import Image from "next/image";

interface RootLayoutProps extends React.PropsWithChildren<{}> {}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <Topbar />
      <main className="relative z-10 min-h-screen">{children}</main>
      <div className="fixed hidden md:block opacity-50 -bottom-[40%] -left-[20%] z-0 blur-lg">
        <Image
          alt="docs-left"
          src="/images/docs-left.png"
          width={1266}
          height={1211}
          className="relative z-10 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
        />
      </div>
      <div className="fixed hidden md:block opacity-50 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12 blur-lg">
        <Image
          alt="docs-right"
          src="/images/docs-right.png"
          width={1833}
          height={1822}
          className="relative z-10 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
        />
      </div>
    </div>
  );
};

export default RootLayout;
