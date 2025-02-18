import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='container'>
        <div className='container text-left' style={{margin: "30px"}}>
            <h3>Iniciar Sesion</h3>
        </div>
        <form>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Ingrese su correo...'/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Ingrese su contraseña...'/>
        </div>
        <div className="mb-3">
            <p>¿No tienes cuenta? <Link to='/register'>Creala aquí</Link></p>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
