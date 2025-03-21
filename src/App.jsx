import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NavbarC from "./components/Navbar/NavbarC";
import AdminHomePage from "./pages/AdminHomePage";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {

  return (
    <Router>
      <NavbarC />
      <Routes>
        {/* Rutas Publicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Rutas a Proteger/Protegidas */}
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
