"use client";

import LeftSidebar from "@/components/LeftSideBar/SideBar";
import MainSection from "@/components/MainSection/SideBar";
import RightSidebar from "@/components/RightSideBar/SideBar";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="w-72 bg-white shadow-lg">
        <LeftSidebar />
      </div>
      <div className="flex-grow m-8">
        <MainSection />
      </div>
      <div className="w-72 bg-white shadow-lg">
        <RightSidebar />
      </div>
    </main>
  );
}
