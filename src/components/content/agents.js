import React from 'react'
import { connect } from 'react-redux'
import fetchAgents from '../../actions/agentActions'
@connect((store)=> {
	return {
		data : store.agents
	};
})
class Agents extends React.Component{
	columns = [
		{name: 'id',displayText: 'ID'},
		{name: 'username',displayText: 'USERNAME'},
		{name: 'phoneNumber',displayText: 'PHONE'},
		{name: 'custId',displayText: 'CUSTOMER ID'},
		{name: 'emailId',displayText: 'EMAIL ID'},
		{name: 'source',displayText: 'SOURCE'}
	];
	willRender(){
		//console.log('In agents will render',this.props);
		//fetchAgents();
	}
	render() {
		return (<span>AGENTS</span>);
		/*return (
			<BootstrapTable data={this.props.data} pagination={true}>
			{ this.columns.map((column,index) => 
							<TableHeaderColumn dataField={column.name} key={index}>
							{column.displayText}
							</TableHeaderColumn>
						)
					}
		</BootstrapTable>

		);*/
	} 
}

export default Agents;