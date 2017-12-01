import client from './'

const url = "/api-catalogo/diagnosticos/"
export const DIAGNOSTICO_LIST = "DIAGNOSTICO_LIST"
export const diagnosticoList = (list) => (
    {
        type: DIAGNOSTICO_LIST,
        list
    }
)

export const DIAGNOSTICO_LIST_FAILURE = 'DIAGNOSTICO_LIST_FAILURE'
export const diagnosticoListFailure = error => ({
    type: DIAGNOSTICO_LIST_FAILURE,
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
            dispatch(diagnosticoList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(diagnosticoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(diagnosticoListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(diagnosticoListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const DIAGNOSTICO_ADD = "DIAGNOSTICO_ADD"
export const diagnosticoAdd = () => (
    {
        type: DIAGNOSTICO_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(diagnosticoAdd())
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
export const DIAGNOSTICO_UPDATE = "DIAGNOSTICO_UPDATE"
export const diagnosticoUpdate = () => (
    {
        type: DIAGNOSTICO_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(diagnosticoUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const DIAGNOSTICO_DELETE = "DIAGNOSTICO_DELETE"
export const diagnosticoDelete = (data) => (
    {
        type: DIAGNOSTICO_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(diagnosticoDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
