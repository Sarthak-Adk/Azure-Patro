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

  // ✅ Unified layout check for simple pages
  const simplePages = ["/rashifal", "/mantra", "/news"];
  const isSimplePage = simplePages.some((page) => path.startsWith(page));

  // ✅ Simple Layout (Rashifal, Mantra, News)
  if (isSimplePage) {
    return (
      <div className="bg-gray-100 min-h-screen font-sans">
        <Header />
        <main className="flex-1 px-4 sm:px-8 lg:px-20 mt-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  // ✅ Default Layout (Home, Calendar, etc.)
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <div className="flex flex-col lg:flex-row mt-2 px-4 sm:px-8 lg:px-20">
        <Sidebar />
        <main className="flex-1 overflow-auto mt-4 lg:mt-0 lg:pl-8">
          <Outlet />
        </main>
      </div>

      {/* Optional Components for Default Layout */}
      <RashifalCard />
      <Services />
      <MantraCard />
      <Footer />
    </div>
  );
}
