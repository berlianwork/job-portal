import React from "react";
import Navbar from "../../../../../components/common/Navbar";

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navbar />
      <section className="overflow-y-auto max-h-[80vh] pb-7  main-layout">
        {children}
      </section>
    </main>
  );
};

export default MenuLayout;
