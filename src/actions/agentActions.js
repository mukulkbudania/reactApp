export function fetchAgents() {

	return function(dispatch) {
		dispatch({type: "FETCH_AGENTS_LOADING", payload: ""})
	    axios.get("localhost:9999/goldengate-admin/agents")
	      .then((response) => {
	        dispatch({type: "FETCH_AGENTS_FULFILLED", payload: response.data})
	      })
	      .catch((err) => {
	        dispatch({type: "FETCH_AGENTS_REJECTED", payload: err})
	      })
	  }
}