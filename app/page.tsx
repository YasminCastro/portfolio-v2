import LeftSidebar from "@/components/LeftSideBar/SideBar";
import MainSection from "@/components/MainSection/MainSection";
import MobileHeader from "@/components/MobileHeader/Index";
import RightSidebar from "@/components/RightSideBar/SideBar";

export default function Home() {
  return (
    <main>
      <div className="flex bg-accent max-md:hidden">
        <div className="min-w-72 h-fit w-72 bg-card shadow-lg">
          <LeftSidebar />
        </div>
        <div className="m-8 flex-grow">
          <MainSection />
        </div>
        <div className="min-w-16 max-[1200px]:min-w-28 w-16 max-[1200px]:w-28"></div>
        <div className="min-w-16 fixed right-0 h-screen w-16 bg-card shadow-lg">
          <RightSidebar />
        </div>
      </div>
      <div className="hidden flex-col space-y-8 bg-accent max-md:flex">
        <MobileHeader />
        <MainSection />
      </div>
      <footer className="flex w-full items-center justify-center bg-card px-20 py-7 shadow-md">
        <div className="text-sm text-gray-600">
          <p>Copyright © 2023 Yas Castro.</p>
        </div>
      </footer>
    </main>
  );
}
