import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ExchangeRatesTable from "../components/ExchangeRateTable";
import GoldSilverRates from "../components/GoldSilverRates";
import RashifalCard from "../components/RashifalCard";
import Services from "../components/Services";
import MantraCard from "../components/MantraCard";

export default function Layout() {
  const location = useLocation();
  const path = location.pathname;

  const isRashifalPage = path.startsWith("/rashifal");
  const isMantraPage = path.startsWith("/mantra");

  // Rashifal page layout
  if (isRashifalPage) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <Header />
        <main className="flex-1 lg:px-[77px] md:px-[10px] px-5 mt-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  // Mantra page layout
  if (isMantraPage) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <Header />
        <main className="flex-1 lg:px-[77px] md:px-[10px] px-5 mt-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  // Default layout (Home, Calendar, etc.)
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <div className="flex flex-col lg:flex-row mt-2 lg:px-[77px]">
        <Sidebar />
        <main className="flex-1 overflow-auto lg:px-[77px] md:px-[10px] px-5">
          <Outlet />
        </main>
        {/* Optional right widgets */}
        {/* <div className="hidden lg:flex flex-col gap-4 ml-6 w-80">
          <ExchangeRatesTable />
          <GoldSilverRates />
        </div> */}
      </div>

      {/* Only show these components on default layout */}
      <RashifalCard />
      <Services />
      <MantraCard />
      
      <Footer />
    </div>
  );
}
