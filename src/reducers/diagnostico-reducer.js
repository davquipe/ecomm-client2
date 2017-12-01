import {
    DIAGNOSTICO_LIST,
    DIAGNOSTICO_LIST_FAILURE,
    DIAGNOSTICO_ADD, DIAGNOSTICO_UPDATE,
    DIAGNOSTICO_DELETE
} from '../actions/diagnostico-action'
//import { DIAGNOSTICO_FETCH,  } from '../actions/diagnotico-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const diagnosticoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DIAGNOSTICO_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case DIAGNOSTICO_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case DIAGNOSTICO_ADD:
            return {
                ...state,
            }
        /*
    case DIAGNOSTICO_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case DIAGNOSTICO_UPDATE:
            return {
                ...state,
            }
        case DIAGNOSTICO_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default diagnosticoReducer