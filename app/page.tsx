"use client";

import LeftSidebar from "@/components/LeftSideBar/SideBar";
import MainSection from "@/components/MainSection/SideBar";
import RightSidebar from "@/components/RightSideBar/SideBar";

export default function Home() {
  return (
    <main className="flex bg-accent ">
      <div className="w-72 bg-card shadow-lg">
        <LeftSidebar />
      </div>
      <div className="flex-grow m-8">
        <MainSection />
      </div>
      <div className="w-72 bg-card shadow-lg">
        <RightSidebar />
      </div>
    </main>
  );
}
