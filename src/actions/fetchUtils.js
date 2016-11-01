import axios from 'axios'
import CONSTS from '../constants'
function handleResponse (response) {
  if (response.status >= 200 && response.status < 300) {
      console.log('Data',response.json());
    return response.json()
  }
  throw new Error(formatErrorMessage(response))
}

function formatErrorMessage (res) {
    console.log('Error',res);
  return `[${res.status}]: ${res.statusText} (${res.url})`
}

// Error action that is dispatched on failed fetch requests
function errorAction (error) {
  return {
    type: CONSTS.ACTIONS.SET_ERROR_MESSAGE,
    error: true,
    errorMessage: error.message
  }
}

export default function fetchDispatch (opts) {
  return (dispatch) => {
    dispatch({ type: opts.types.request })
    var promise = null
    switch(opts.verb){
        case CONSTS.VERBS.GET :  promise = axios({method: 'get', url: opts.url});
                                 break;
        case CONSTS.VERBS.POST : promise = axios({method: 'post', url: opts.url, data: opts.data});
                                 break;
        case CONSTS.VERBS.PUT : promise = axios({method: 'put', url: opts.url, data: opts.data});
                                break;
        case CONSTS.VERBS.DELETE : promise = axios({method: 'delete', url: opts.url});
                                   break;  
    }
    return promise()
      .then(handleResponse)
      .then((data) => { // Dispatch the recevied action with type and data
        const obj = opts.onReceived ? opts.onReceived(data) : { data }
        return dispatch(Object.assign({ type: opts.types.receive }, obj))
      }).catch((error) => dispatch(errorAction(error)))
  }
}