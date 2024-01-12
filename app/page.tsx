import LeftSidebar from "@/components/LeftSideBar/SideBar";
import MainSection from "@/components/MainSection/MainSection";
import RightSidebar from "@/components/RightSideBar/SideBar";

export default function Home() {
  return (
    <main className="flex bg-accent ">
      <div className="min-w-72 h-fit w-72 bg-card shadow-lg">
        <LeftSidebar />
      </div>
      <div className="m-8 flex-grow">
        <MainSection />
      </div>
      <div className="min-w-16 w-16"></div>
      <div className="min-w-16 fixed  right-0 h-screen w-16 bg-card shadow-lg">
        <RightSidebar />
      </div>
    </main>
  );
}
