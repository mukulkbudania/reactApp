import React from 'react'
import { connect } from 'react-redux'
class Agents extends React.Component{
	columns = [
		{name: 'id',displayText: 'ID'},
		{name: 'username',displayText: 'USERNAME'},
		{name: 'phoneNumber',displayText: 'PHONE'},
		{name: 'custId',displayText: 'CUSTOMER ID'},
		{name: 'emailId',displayText: 'EMAIL ID'},
		{name: 'source',displayText: 'SOURCE'}
	];
	render() {
		return (
			<span> AGENTS </span>
		);
	} 
}

export default Agents;