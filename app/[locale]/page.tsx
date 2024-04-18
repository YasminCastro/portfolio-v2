import Footer from "@/components/Footer/Footer";
import LeftSidebar from "@/components/LeftSideBar/SideBar";
import MainSection from "@/components/MainSection/MainSection";
import MobileHeader from "@/components/MobileHeader/Index";
import RightSidebar from "@/components/RightSideBar/SideBar";

export default function Home() {
  return (
    <main>
      <div className="flex bg-accent max-md:hidden">
        <div className="h-fit w-72 min-w-72 bg-card shadow-lg">
          <LeftSidebar />
        </div>
        <div className="m-8 flex-grow">
          <MainSection />
        </div>
        <div className="w-16 min-w-16 max-[1200px]:w-28 max-[1200px]:min-w-28 max-[920px]:hidden"></div>
        <div className="fixed right-0 h-screen w-16 min-w-16 bg-card shadow-lg max-[920px]:hidden">
          <RightSidebar />
        </div>
      </div>
      <div className="hidden flex-col space-y-8 bg-accent max-md:flex">
        <MobileHeader />
        <MainSection />
      </div>
      <Footer />
    </main>
  );
}
