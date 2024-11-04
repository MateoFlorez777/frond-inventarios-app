import React from 'react'
import { Link } from 'react-router-dom'

export default function Navegacion() {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SOFTWARE-S</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">INICIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/agregar">Agregar Producto</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/cita">Citas</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/crearcitas">Crear Citas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
