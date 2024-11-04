import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarCitas() {

    const urlBase = "http://localhost:8081/cita/citas";
    
    
    let Navegacion = useNavigate();

    const {id_Cita} = useParams();

    const [Cita, setCita]=useState({
        fecha_Cita: '',
        hora_Cita: '',
        estado: '',
        descripcion: ''
    })

    const {fecha_Cita, hora_Cita, estado, descripcion} = Cita

    useEffect(() => {
        cargarCita();
    },[])

    const cargarCita = async () => {
        const resultado = await axios.get(`${urlBase}/${id_Cita}`)
        setCita(resultado.data);
    }

    const onInputChange = (c) => {
        setCita({...Cita, [c.target.name]: c.target.value })
    }

    const onSubmit = async (c) => {
        c.preventDefault();
        await axios.put(`${urlBase}/${id_Cita}`, Cita);
        // redirigir a la pagina de inicio
        Navegacion('/cita');
    }

  return (

    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Agregar Citas</h3>
        </div>

        <form onSubmit={(c) => onSubmit(c)}>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha Cita</label>
                <input type="date" className="form-control" id="fecha" name="fecha_Cita" required={true}
                value={fecha_Cita} onChange={(c)=>onInputChange(c)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="hora" className="form-label">Hora Cita</label>
                <input type="time" className="form-control" id="hora" name='hora_Cita' required={true}
                value={hora_Cita} onChange={(c)=>onInputChange(c)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="estado" className="form-label">Estado</label>
                <input type="text" className="form-control" id="estado" name='estado' required={true} placeholder='Escriba el estado...'
                value={estado} onChange={(c)=>onInputChange(c)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea className="form-control" id="descripcion" name='descripcion' required={true} placeholder='Descripcion de la cita...'
                value={descripcion} onChange={(c)=>onInputChange(c)}/>
            </div>
            <div className='text-center'>
                <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
                <a href="/cita" className='btn btn-danger btn-sm'>Regresar</a>
            </div>
        </form>



    </div>
  )
}
