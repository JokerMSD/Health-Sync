import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from "../pages/Landing";
import { Register } from "../pages/Register";
import { HomePage } from "../pages/Home";
import { ErrorPage } from "../pages/Error";
import { PrivateRoutesUser } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RouterMain = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoutesUser />}>
          <Route path="/dashboard" element={<HomePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
