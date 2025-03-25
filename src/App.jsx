import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NavbarC from "./components/navbar/NavbarC";
import AdminHomePage from "./pages/AdminHomePage";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetalleProducto from "./pages/DetalleProducto";
import AcercaDeNosotros from "./pages/AcercaDeNosotros";
import ProductosAdminPage from "./pages/ProductosAdminPage";

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Rutas a Proteger/Protegidas */}
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/productos" element={<ProductosAdminPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
