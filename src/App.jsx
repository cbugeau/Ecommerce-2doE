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
import Error404 from "./pages/Error404";
import UserPage from "./pages/UserPage";
import TableProductsUser from "./components/tableProductsUser/TableProductsUser";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SalesAdminPage from "./pages/SalesAdminPage";

const App = () => {
  return (
    <Router>
      <NavbarC />
      <Routes>
        {/* Rutas Publicas */}
        <Route path="*" element={<Error404 />} />;
        <Route path="/Acerca-De-Nosotros" element={<AcercaDeNosotros />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Rutas a Proteger/Protegidas */}
        <Route
          path="/admin"
          element={
            <PrivateRoute rol="admin">
              <AdminHomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/productos"
          element={
            <PrivateRoute rol="admin">
              <ProductosAdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/ventas"
          element={
            <PrivateRoute rol="admin">
              <SalesAdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute rol="usuario">
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/detalle-producto/:id"
          element={
            <PrivateRoute rol="usuario">
              <DetalleProducto />
            </PrivateRoute>
          }
        />
        ;
        <Route
          path="/user/cart"
          element={
            <PrivateRoute rol="usuario">
              <TableProductsUser />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
