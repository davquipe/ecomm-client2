import client from './'

const url = "/api-catalogo/categorias/"
export const CATEGORIA_LIST = "CATEGORIA_LIST"
export const categoriaList = (list) => (
    {
        type: CATEGORIA_LIST,
        list
    }
)

export const CATEGORIA_LIST_FAILURE = 'CATEGORIA_LIST_FAILURE'
export const categoriaListFailure = error => ({
    type: CATEGORIA_LIST_FAILURE,
    error
})

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(categoriaList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(categoriaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(categoriaListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(categoriaListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const CATEGORIA_ADD = "CATEGORIA_ADD"
export const categoriaAdd = () => (
    {
        type: CATEGORIA_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(categoriaAdd())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}


export const getById = (id) => {
    return (dispatch) => {
        return client.get(`${url}${id}`).then(r => {
            return r.data
        })
    }
}
/*
export const CATEGORIA_FETCH = "CATEGORIA_FETCH"
export const categoriaFetch = (data) => (
    {
        type: CATEGORIA_FETCH,
        data
    }
)
export const getByIdx = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.get(`${url}${id}`).then(r => {
                    dispatch(categoriaFetch(r.data))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
*/
export const CATEGORIA_UPDATE = "CATEGORIA_UPDATE"
export const categoriaUpdate = () => (
    {
        type: CATEGORIA_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(categoriaUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const CATEGORIA_DELETE = "CATEGORIA_DELETE"
export const categoriaDelete = (data) => (
    {
        type: CATEGORIA_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(categoriaDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
