const initialState = {
	agents : {
		data : [],
		error : null,
		state : {
			init: true,
			loading: false,
			fetched: false,
			error: false
		},
		totalRecords : 0 
	}
	
}
const agentReducer = function(state={initialState}, action){
	console.log('Reducer: ');
	console.log(action);
	switch(action.type){
		case "FETCH_AGENTS_LOADING" : return {...state};
		case "FETCH_AGENTS_FULFILLED": return {...state,
			agents.data : action.payload.agentList, 
			agents.state.fetched : true ,
			agents.totalRecords : action.payload.agentList.length
		}; break;
		case "FETCH_AGENTS_REJECTED" : return {...state,
			agents.error : action.payload,
			agents.state.error : true,
			agents.totalRecords : 0			
		}; break; 
		
		default: return {...state};				
	}
		
}
export default agentReducer;