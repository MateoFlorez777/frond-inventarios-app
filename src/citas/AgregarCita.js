import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



export default function AgregarCita() {


    const urlBase = "http://localhost:8081/cita/citas";

    const [Cita, setCita] = useState([]);

    useEffect(() => {
        cargarCitas();
    }, []);

    const cargarCitas = async () => {
        const resultado = await axios.get(urlBase);
        // console.log("Resultado carga Citas");
        // console.log(resultado.data);
        setCita(resultado.data);
        
    }

    const eliminarCitas = async (id_Cita) => {
        await axios.delete(`${urlBase}/${id_Cita}`);
        cargarCitas();
    }
    

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Sistema de Asignacion de Citas</h3>
        </div>

        <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                    <th scope="col">Id_Cita</th>
                    <th scope="col">Fecha_Cita</th>
                    <th scope="col">Hora_Cita</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Descripcion</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    //Iteramos el arreglo de citas
                    Cita.map((Cita, indice) =>(
                        <tr key={indice}>
                        <th scope="row">{Cita.id_Cita}</th>
                        <td>{Cita.fecha_Cita}</td>
                        <td>{Cita.hora_Cita}</td>
                        <td>{Cita.estado}</td>
                        <td>{Cita.descripcion}</td>
                        <td className='text-center'>
                            <div>
                                <Link to={`/editarcita/${Cita.id_Cita}`}
                                className='btn btn-warning btn-sm me-3'>Editar</Link><br/><br/>
                                <button onClick={()=>eliminarCitas(Cita.id_Cita)}
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
