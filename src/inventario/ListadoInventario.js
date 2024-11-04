import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoInventario() {

    const urlBase = "http://localhost:8081/productos/productos";

    const [entities, setentities] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        const resultado = await axios.get(urlBase);
        // console.log("Resultado carga empleados");
        // console.log(resultado.data);
        setentities(resultado.data);
        
    }

    const eliminarProducto = async (id_Producto) => {
        await axios.delete(`${urlBase}/${id_Producto}`);
        cargarProductos();
    }

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Sistema de Inventario</h3>
        </div>
            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                    <th scope="col">Id_Producto</th>
                    <th scope="col">Nombre_Producto</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Cantidad_Unidad</th>
                    <th scope="col">Precio_Unidad</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Estado_Producto</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    //Iteramos el arreglo de empleados
                    entities.map((entities, indice) =>(
                        <tr key={indice}>
                        <th scope="row">{entities.id_Producto}</th>
                        <td>{entities.nombre_Producto}</td>
                        <td>{entities.descripcion}</td>
                        <td>{entities.cantidad_Unidad}</td>
                        <td><NumericFormat value={entities.precio_Unidad}
                            displayType={'text'}
                            thousandSeparator="," prefix={'$'}
                            decimalScale={2} fixedDecimalScale/>
                        </td>
                        <td>{entities.stock}</td>
                        <td>{entities.estado_Producto}</td>
                        <td className='text-center'>
                            <div>
                                <Link to={`/editar/${entities.id_Producto}`}
                                className='btn btn-warning btn-sm me-3'>Editar</Link><br/><br/>
                                <button onClick={()=>eliminarProducto(entities.id_Producto)}
                                    className='btn btn-danger btn-sm'>Eliminar
                                </button>
                            </div>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>
    </div>
  )
}
