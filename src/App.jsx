import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NavbarC from "./components/Navbar/NavbarC";
import AdminHomePage from "./pages/AdminHomePage";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import DetalleProducto from "./pages/DetalleProducto";
import AcercaDeNosotros from "./pages/AcercaDeNosotros";

const App = () => {
  return (
    <Router>
      <NavbarC />
      <Routes>
        {/* Rutas Publicas */}
        <Route path="/Acerca-De-Nosotros" element={<AcercaDeNosotros />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/detalle-producto/:id" element={<DetalleProducto />} />;
        {/* Rutas a Proteger/Protegidas */}
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
