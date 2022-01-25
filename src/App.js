// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Style Imports
import "./App.css";
import "./app.scss";

// Page Imports
import HomePage from "./pages/home/home.page";
import DashboardPage from "./pages/dashboard/dashboard.page";
import { Layout } from "./components/layout/layout.component";

import ComingSoonPage from "./pages/comingsoon/comingsoon.page";
import ErrorPage from "./pages/error/error.page";

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Routes>
          (Public Paths)
          <Route path="/" element={<HomePage />} />
          <Route path="/request-data" element={<HomePage />} />
          (Similar Layout Pages)
          <Route element={<Layout />}>
            (Common Authenticated Routes) (DashboardPage)
            <Route path="/dashboard" element={<DashboardPage />} />
            (Authorization Based Routes) (AddInvestmentPage)
            <Route path="/add-investment" element={<ComingSoonPage />} />
            (DataCentersPage)
            <Route path="/data-centers" element={<ComingSoonPage />} />
            (DataRequestsPage)
            <Route path="/data-requests" element={<ComingSoonPage />} />
            (AddUserPage)
            <Route path="/admin/add-user" element={<ComingSoonPage />} />
            (ManageUsersPage)
            <Route path="/admin/manage-users" element={<ComingSoonPage />} />
          </Route>
          (Page Not Found Page)
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
