// Library Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Style Imports
import "./App.css";
import "./app.scss";

// Page Imports
import HomePage from "./pages/home/home.page";
import { Layout } from "./components/layout/layout.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        (Public Paths)
        <Route path="/" element={<HomePage />} />
        <Route path="/request-data" element={<HomePage />} />
        (Similar Layout Pages)
        <Route element={<Layout />}>
          (Common Authenticated Routes)
          <Route path="/dashboard" element={<DashboardPage />} />
          (Authorization Based Routes)
          <Route path="/add-investment" element={<AddInvestmentPage />} />
          <Route path="/data-centers" element={<DataCentersPage />} />
          <Route path="/data-requests" element={<DataRequestsPage />} />
          <Route path="/admin/add-user" element={<AddUserPage />} />
          <Route path="/admin/manage-users" element={<ManageUsersPage />} />
        </Route>
        (Page Not Found Page)
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
