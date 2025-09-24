import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home  from "./Pages/Home";
import Layout from "./layout/layout";
import CalendarPage from "./pages/CalendarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes go inside Layout's <Outlet /> */}
          <Route index element={<Home/>} />
          <Route path="calendar" element={<CalendarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
