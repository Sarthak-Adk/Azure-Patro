import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Rashifal from "./pages/Rashifal";
import MantraPage from "./pages/MantraPage";
import CalendarPage from "./pages/CalendarPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="rashifal/*" element={<Rashifal />} />
            <Route path="mantra" element={<MantraPage />} />
          <Route path="news" element={<NewsPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
