import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarProducto() {
    
    const urlBase = "http://localhost:8081/productos/productos";
    
    
    let Navegacion = useNavigate();

    const {id_Producto} = useParams();

    const [entities, setentities]=useState({
        nombre_Producto: '',
        descripcion: '',
        cantidad_Unidad: '',
        precio_Unidad: '',
        stock: '',
        estado_Producto: ''
    })

    const {nombre_Producto, descripcion, cantidad_Unidad, precio_Unidad, stock, estado_Producto} = entities

    useEffect(() => {
        cargarentities();
    },[])

    const cargarentities = async () => {
        const resultado = await axios.get(`${urlBase}/${id_Producto}`)
        setentities(resultado.data);
    }

    const onInputChange = (e) => {
        setentities({...entities, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${id_Producto}`, entities);
        // redirigir a la pagina de inicio
        Navegacion('/');
    }

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Editar Productos</h3>
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre Producto</label>
                <input type="text" className="form-control" id="nombre" name="nombre_Producto" required={true} placeholder='Ingrese el nombre del producto...'
                value={nombre_Producto} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <textarea className="form-control" id="descripcion" name="descripcion" required={true} placeholder='Describe tu producto...'
                value={descripcion} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="cantidad" className="form-label">Cantidad por Unidad</label>
                <input type="number" className="form-control" id="cantidad" name="cantidad_Unidad" required={true} placeholder='Digita la cantidad por unidad...'
                value={cantidad_Unidad} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio Unidad</label>
                <input type="number" step="any" className="form-control" id="precio" name="precio_Unidad" required={true} placeholder='Digita el precio...'
                value={precio_Unidad} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Stock</label>
                <input type="number" className="form-control" id="stock" name="stock" required={true} placeholder='Digita el stock...'
                value={stock} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="estado" className="form-label">Estado Producto</label>
                <input type="text" className="form-control" id="estado" name="estado_Producto" required={true} placeholder='Ingresa el estado del producto'
                value={estado_Producto} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='text-center'>
                <button type="submit" className="btn btn-warning btn-sm me-3">Editar</button>
                <a href="/" className='btn btn-danger btn-sm'>Regresar</a>
            </div>
        </form>

    </div>
  )
}
