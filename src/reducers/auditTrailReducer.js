const initialState = {
	auditTrail : {
		data : [],
		state : {
			init: true,
			loading: false,
			fetched: false,
			error: false
		},
		totalRecords : 0 
	}
	
}
const dataReducer = function(state={initialState}, action){
	console.log('Reducer: ');
	console.log(action);
	switch(action.type){
		case "FETCH_AUDIT_TRAIL": return {...state,
						route:action.payload };
		default: return {...state};				
	}
		
}
export default dataReducer;