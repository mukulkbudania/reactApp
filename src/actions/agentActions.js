export function fetchAgents() {

	return function(dispatch) {
	    axios.get("http://localhost:9999/goldengate-admin/agents")
	      .then((response) => {
	        dispatch({type: "FETCH_AGENTS_FULFILLED", payload: response})
	      })
	      .catch((err) => {
	        dispatch({type: "FETCH_AGENTS_REJECTED", payload: err})
	      })
	  }
}