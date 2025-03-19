import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer/Footer";
import NavbarC from "./components/Navbar/NavbarC";
import AdminHomePage from "./pages/AdminHomePage";

const App = () => {
  return (
    <>
      <Router>
        <NavbarC />
        <Routes>
          {/* Rutas Publicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Rutas a Proteger/Protegidas */}
          <Route path="/admin" element={<AdminHomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
