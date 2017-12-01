import {
    CATEGORIA_LIST,
    CATEGORIA_LIST_FAILURE,
    CATEGORIA_ADD, CATEGORIA_UPDATE,
    CATEGORIA_DELETE
} from '../actions/categoria-action'
//import { CATEGORIA_FETCH,  } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {},
    error: null
}

const categoriaReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIA_LIST:
            return {
                ...state,
                list: action.list,
                error: null
            }
        case CATEGORIA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }
        case CATEGORIA_ADD:
            return {
                ...state,
            }
        /*
    case CATEGORIA_FETCH:
        return {
            ...state,
            data: action.data
        }*/
        case CATEGORIA_UPDATE:
            return {
                ...state,
            }
        case CATEGORIA_DELETE:
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        default:
            return state;
    }
}
export default categoriaReducer