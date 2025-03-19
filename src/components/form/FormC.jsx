import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

const FormC = ({ idPage }) => {
  const navigate = useNavigate()
  const [formulario, setFormulario] = useState({
    nombreUsuario: '',
    email: '',
    contrasenia: '',
    repContrasenia: '',
    checkForm: false
  })

  const [errores, setErrores] = useState({})

 

  return (
    <>
      <Container className='d-flex justify-content-center my-5'>
        <Form>

          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name='nombreUsuario' value={formulario.nombreUsuario} isInvalid={errores.nombreUsuario} />
          </Form.Group>

          {
            idPage === 'register' &&
            <Form.Group className="mb-3" controlId="formBasicEmail2">
              <Form.Label>Email del Usuario</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' value={formulario.email}  isInvalid={errores.email} />
            </Form.Group>
          }

          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" name='contrasenia' value={formulario.contrasenia} />
          </Form.Group>
          {
            <>
              <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Repetir Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" name='repContrasenia' value={formulario.repContrasenia} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox1">
                <Form.Check type="checkbox" label="Check me out" name='checkForm' value={formulario.checkForm} />
              </Form.Group>
            </>
          }
          <Button variant="primary" type="submit" > </Button>
        </Form>
      </Container>
    </>
  )
}

export default FormC;
