import CONSTS from '../constants'
import fetchDispatch from './fetchUtils'

const apiProps = {
  url: CONSTS.BASE_URL + CONSTS.URLS.AUDIT_TRAIL,
  types: {
    request: CONSTS.ACTIONS.REQUEST_AUDIT_TRAIL_DATA,
    receive: CONSTS.ACTIONS.RECEIVE_AUDIT_TRAIL_DATA,
  },
  verb: CONSTS.VERBS.POST,
  body: {}
}

function shouldFetchData ({table}) {
  return (!table.data || !table.isFetching)
}

function fetchData () {
  return (dispatch, getState) => {
    if (shouldFetchData(getState())) {
      return dispatch(fetchDispatch(apiProps))
    }
  }
}

export default { fetchData }