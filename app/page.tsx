import LeftSidebar from "@/components/LeftSideBar/SideBar";
import MainSection from "@/components/MainSection/MainSection";
import RightSidebar from "@/components/RightSideBar/SideBar";

export default function Home() {
  return (
    <main className="flex bg-accent ">
      <div className="w-72 min-w-72 bg-card shadow-lg">
        <LeftSidebar />
      </div>
      <div className="flex-grow m-8">
        <MainSection />
      </div>
      <div className="w-16 min-w-16"></div>
      <div className="w-16 min-w-16  bg-card shadow-lg fixed right-0 h-screen">
        <RightSidebar />
      </div>
    </main>
  );
}
