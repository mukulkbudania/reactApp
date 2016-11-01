export function listAuditTrail (data) {
  return data.response;
}

function handleTableActions(state, action){
	switch (action.type) {
    case ACTIONS.REQUEST_AUDIT_DATA:
      return { isFetching: true }
    case ACTIONS.RECEIVE_AUDIT_DATA:
      return {
        isFetching: false,
        data: listAuditTrail(action.data)
      }
    default:
      return state
  }	
}


const dataReducer = function(state={}, action){
	return Object.assign({},state,handleTableActions(state,action));
}
export default dataReducer;