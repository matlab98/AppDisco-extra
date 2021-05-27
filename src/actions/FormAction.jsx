
import {types} from '../types/types'

const ValidarAction = (estado) => {
    return {
        type: types.validar,
        payload: estado
    }
}
export default ValidarAction
