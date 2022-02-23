// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Style Imports
import "./App.css";
import "./app.scss";

// Page Imports
import HomePage from "./pages/home/home.page";
import DashboardPage from "./pages/dashboard/dashboard.page";
import { Layout } from "./components/layout/layout.component";
import AddInvestmentPage from "./pages/add-investment/add-investment.page";
import DataCenterPage from "./pages/data-center/data-center.page";
import DataRequestPage from "./pages/data-requests/data-requests.page";
import AddUserPage from "./pages/users/add/add-user.page";
import ManageUsersPage from "./pages/users/manage/manage-user.page";
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
            <Route path="/add-investment" element={<AddInvestmentPage />} />
            (DataCentersPage)
            <Route path="/data-center" element={<DataCenterPage />} />
            (DataRequestsPage)
            <Route path="/data-requests" element={<DataRequestPage />} />
            (AddUserPage)
            <Route path="/admin/add-user" element={<AddUserPage />} />
            (ManageUsersPage)
            <Route path="/admin/manage-users" element={<ManageUsersPage />} />
          </Route>
          (Page Not Found Page)
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
