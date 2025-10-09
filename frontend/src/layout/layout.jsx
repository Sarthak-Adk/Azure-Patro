import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ExchangeRatesTable from "../components/ExchangeRateTable";
import GoldSilverRates from "../components/GoldSilverRates";
import Footer from "../components/Footer";
import RashifalCard from "../components/RashifalCard";
import Services from "../components/Services";
import MantraCard from "../components/MantraCard";

export default function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <div className="flex flex-col lg:flex-row mt-2  lg:px-[77px]">
        <Sidebar />
        <main className="flex-1   ">
          <Outlet />
        </main>

        {/* <div className="bg-white">      
            <ExchangeRatesTable/>
            <GoldSilverRates/>
            </div> */}
      </div>
      <RashifalCard />
      <div className="lg:mx-[78px]">
        <Services />
      </div>
      <div >
        <MantraCard />
      </div>
      <Footer />
    </div>
  );
}
