import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-[#d4d4d4] overflow-hidden">
      <Header />
      <div className="w-full overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
