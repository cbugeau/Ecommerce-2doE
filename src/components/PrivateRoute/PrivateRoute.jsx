import { useNavigate } from "react-router";
import { useEffect } from "react";

const PrivateRoute = ({ children, rol }) => {
  const navigate = useNavigate();
  const usuarioLogeado = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;

  useEffect(() => {
    // Si no hay usuario logueado, redirigir al login
    if (!usuarioLogeado) {
      navigate("/login");
      return;
    }

    // Definir las rutas de redirección según el rol del usuario
    const redirectPaths = {
      admin: "/admin", // Redirige a dashboard del admin
      usuario: "/user", // Redirige a página de usuario
    };

    // Si el rol del usuario no coincide con el rol esperado, redirige
    if (usuarioLogeado.rol !== rol) {
      navigate(redirectPaths[usuarioLogeado.rol] || "/");
    }
  }, [navigate, usuarioLogeado, rol]);

  // Si ya se redirigió, no renderizar nada
  if (!usuarioLogeado || usuarioLogeado.rol !== rol) {
    return null;
  }

  // Si el rol coincide, renderiza el contenido
  return children;
};

export default PrivateRoute;
