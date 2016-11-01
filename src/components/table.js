import React from 'react'
class Table extends React.Component {
	componentWillMount () {
		console.log("While mounting" ,this.props);
		this.props.fetchData()
	}
	render(){
		return (<BootstrapTable data={this.props.data} pagination={true}>
			{ this.props.columns.map((column,index) => 
							<TableHeaderColumn dataField={column.name} key={index}>
							{column.displayText}
							</TableHeaderColumn>
						)
					}
		</BootstrapTable>);	
	}
}
Table.propTypes = {
	fetchData: React.PropTypes.func.isRequired,
  	//data: React.PropTypes.array.isRequired,
	columns: React.PropTypes.array.isRequired  
}
export default Table;
