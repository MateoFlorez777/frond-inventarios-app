import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='container'>
        <div className='container text-left' style={{margin: "30px"}}>
            <h3>Crear Cuenta</h3>
        </div>
        <form>
          <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" required={true} placeholder='Ingrese su nombre...'/>
          </div>
          <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="apellido" name="apellido" required={true} placeholder='Ingrese su apellido...'/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" required={true} placeholder='Ingrese un correo...'/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required={true} placeholder='Ingrese una contraseña...'/>
          </div>
          <div className="mb-3">
            <p>¿Ya tienes cuenta? <Link to='/login'>Inicia aquí</Link></p>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
