import {combineReducers} from 'redux';
import CitasReducer from '../reducers/CitasReducer';
import ValidarFormReducer from '../reducers/ValidarFormReducer';

export default combineReducers ({
    citas: CitasReducer,
    error: ValidarFormReducer
})