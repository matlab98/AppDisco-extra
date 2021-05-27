import {types} from '../types/types'

export  const ActionCita = (cita) => {
    return {
        type: types.agregar,
        payload: cita
    }
}

export  const BorrarActionCita = (id) => {
    return {
        type:types.borrar,
        payload: id
    }
}