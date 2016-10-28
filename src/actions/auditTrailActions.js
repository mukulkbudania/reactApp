export function fetchAuditTrail() {

	return function(dispatch) {
		dispatch({type: "FETCH_AUDIT_TRAIL_LOADING", payload: response.data})
	    axios.get("localhost:9999/goldengate-admin/auditTrail")
	      .then((response) => {
	        dispatch({type: "FETCH_AUDIT_TRAIL_FULFILLED", payload: response.data})
	      })
	      .catch((err) => {
	        dispatch({type: "FETCH_AUDIT_TRAIL_REJECTED", payload: err})
	      })
	  }
}