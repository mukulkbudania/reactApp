
const getAgentsFromResponse = (response) => {
	return {
		data : response.listOfAgents,
		state : {init:false,loading:false,fetched:true,error: false},
		totalRecords : response.listOfAgents.length
	}
}
const getErrorFromResponse = (error) => {
	return {
		error : error,
		state : {init:false,loading:false,fetched:false,error: true}
	}
}
const agentReducer = function(state, action){
	console.log('Reducer: ');
	console.log(action);
	switch(action.type){
		case "FETCH_AGENTS_FULFILLED": return {...state,
										agents: getAgentsFromResponse(action.payload)
										}; 
		case "FETCH_AGENTS_REJECTED" : return {...state,
										agents: getErrorFromResponse(action.payload)		
										};
		
		default: return {...state};				
	}
		
}
export default agentReducer;