import React from 'react'
import { useForm } from '../hook/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCita } from '../actions/ActionCita'
import ValidarAction from '../actions/FormAction'
import uuid from 'react-uuid'

const AgregarCitas = () => {
    const [formValues, handleInputChange, reset] = useForm({
        nombre: '',
        fecha: '',
        hora: '',
        comentario: ''
    });

    const { nombre, fecha, hora, comentario} = formValues;

    const dispatch = useDispatch();
    const AgregarCita = (cita) => { dispatch(ActionCita(cita)) }

    const validarFormulario = (estado) =>{ dispatch(ValidarAction(estado)) }
    const error = useSelector((state)=>state.error)
    console.log(error)
    
    const handleSubmit = (e) => {
        e.preventDefault()

       //Limpar campos
        reset();

        //Validar campo
    if( nombre.trim() === '' || fecha.trim() === '' || hora.trim() === '' ) {
        validarFormulario(true);
        return;
    }

    validarFormulario(false);

        AgregarCita({
            id:uuid(),
            nombre,
            fecha,
            hora,
            comentario
        })
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h1> Registrar asistencia</h1>
                    <hr />

                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="Tu nombre"
                                autoComplete="off"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="date"
                                name="fecha"
                                className="form-control"
                                autoComplete="off"
                                value={fecha}
                                onChange={handleInputChange}
                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="time"
                                name="hora"
                                className="form-control"
                                autoComplete="off"
                                value={hora}
                                onChange={handleInputChange}

                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Comentarios</label>
                        <div className="form-group">
                            <textarea
                                name="comentarios"
                                className="form-control"
                                autoComplete="off"
                                value={comentario}
                                onChange={handleInputChange}>

                            </textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
                
                { error.error  ? <div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div> : null}
           
              </div>
        </div>
    )
}

export default AgregarCitas