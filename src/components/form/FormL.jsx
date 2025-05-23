import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const FormL = () => {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    nombreUsuario: "",
    contrasenia: "",
  });

  const [errores, setErrores] = useState({});

  // ------------- Handles -----------------

  const handleChangeLoginForm1 = (ev) => {
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setFormLogin({ ...formLogin, [ev.target.name]: value });
  };

  const handleChangeLoginForm2 = (ev) => {
    ev.preventDefault();
    const usuarioLs = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExiste = usuarioLs.find(
      (usuario) => usuario.nombreUsuario === formLogin.nombreUsuario
    );

    let nuevosErrores = {};
    if (!formLogin.nombreUsuario) {
      nuevosErrores.nombreUsuario = "El campo usuario esta vacio";
    }

    if (!formLogin.contrasenia) {
      nuevosErrores.contrasenia = "El campo contraseña esta vacio";
    }

    setErrores(nuevosErrores);

    if (!usuarioExiste) {
      //alert("El usuario y/o contraseña no son correctos.");
      Swal.fire({
        title: "Login Incorrecto !!!",
        html: "El usuario y/o contraseña no son correctos.",
        icon: "warning",
      });
    }

    if (usuarioExiste.contrasenia === formLogin.contrasenia) {
      usuarioExiste.login = true;
      localStorage.setItem("usuarios", JSON.stringify(usuarioLs));
      sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarioExiste));
      if (usuarioExiste.rol === "usuario") {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      }
    } else {
      //alert("El usuario y/o contraseña no son correctos.");
      Swal.fire({
        title: "Login Incorrecto !!!",
        html: "El usuario y/o contraseña no son correctos.",
        icon: "info",
      });
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center my-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre Usuario"
              name="nombreUsuario"
              value={formLogin.nombreUsuario}
              onChange={handleChangeLoginForm1}
              isInvalid={errores.nombreUsuario}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="contrasenia"
              value={formLogin.contrasenia}
              onChange={handleChangeLoginForm1}
            />
          </Form.Group>

          <Form.Group
            className="d-flex justify-content-center"
            controlId="formBasicPassword1"
          >
            <Button
              variant="success"
              type="submit"
              onClick={handleChangeLoginForm2}
            >
              Iniciar Sesion
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default FormL;
