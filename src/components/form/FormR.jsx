import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

const FormR = () => {
  const navigate = useNavigate()
  const [formRegister, setFormRegister] = useState({
    nombreUsuario: '',
    email: '',
    contrasenia: '',
    repContrasenia: '',
    checkForm: false
  })

  const [errores, setErrores] = useState({})

  // -------------------- Handles --------------------

  const handleChangeRegisterForm = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
    setFormRegister({ ...formRegister, [ev.target.name]: value })
  }

  const handleClickRegisterForm = (ev) => {
    ev.preventDefault()
    const usuarioLs = JSON.parse(localStorage.getItem('usuarios')) || []

    let nuevosErrores = {}
    if (!formRegister.nombreUsuario) {
      nuevosErrores.nombreUsuario = 'El campo usuario esta vacio'
    }

    if (!formRegister.email) {
      nuevosErrores.email = 'El campo email esta vacio'
    }

    setErrores(nuevosErrores)

    if (formRegister.nombreUsuario && formRegister.email && formRegister.contrasenia && formRegister.repContrasenia && formRegister.checkForm) {
      if (formRegister.contrasenia === formRegister.repContrasenia) {
        const nuevoUsuario = {
          id: usuarioLs[usuarioLs.length - 1]?.id + 1 || 1,
          nombreUsuario: formRegister.nombreUsuario,
          email: formRegister.email,
          contrasenia: formRegister.contrasenia,
          rol: 'usuario',
          login: false,
          status: 'enable'
        }

        usuarioLs.push(nuevoUsuario)
        localStorage.setItem('usuarios', JSON.stringify(usuarioLs))

        setFormRegister({
          nombreUsuario: '',
          email: '',
          contrasenia: '',
          repContrasenia: '',
          checkForm: false
        })
        alert("El usuario fue dado de alta correctamente.");
        
      } else {
        alert('Las contraseñas no son iguales')
      }

    } else {
      alert("Falta completar algun campo del Formulario");
    }

  }


  return (
    <>
      <Container className='d-flex justify-content-center my-5'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="Nombre Usuario" name='nombreUsuario' value={formRegister.nombreUsuario} onChange={handleChangeRegisterForm} isInvalid={errores.nombreUsuario} />
          </Form.Group>

          {
              <Form.Group className="mb-3" controlId="formBasicEmail2">
              <Form.Label>Email del Usuario</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' value={formRegister.email}  onChange={handleChangeRegisterForm} isInvalid={errores.email} />
            </Form.Group>
          }

          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" name='contrasenia' value={formRegister.contrasenia} onChange={handleChangeRegisterForm} />
          </Form.Group>
          {
            <>
              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Repetir Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" name='repContrasenia' value={formRegister.repContrasenia} onChange={handleChangeRegisterForm} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                <Form.Check type="checkbox" label="Check me out" name='checkForm' value={formRegister.checkForm} onChange={handleChangeRegisterForm}/>
              </Form.Group>
            </>
          }
          <Button variant="primary" type="submit" onClick={handleClickRegisterForm}>Grabar</Button>
        </Form>
      </Container>
    </>
  )
}

export default FormR;