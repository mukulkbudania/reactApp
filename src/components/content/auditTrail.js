import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux'

@connect((store)=> {
	return {
		data : store.auditTrail
	};
})
class AuditTrail extends React.Component{
	columns = [
		{name: 'userId',displayText: 'USER ID'},
		{name: 'action',displayText: 'ACTION'},
		{name: 'latitude',displayText: 'LAT'},
		{name: 'longitude',displayText: 'LONG'},
		{name: 'client',displayText: 'CLIENT'},
		{name: 'version',displayText: 'VERSION'},
		{name: 'createdAt',	displayText: 'DATE'},
		{name: 'osVersion',displayText: 'OS'},
		//Aditional Info
		{name: 'ipAddress',	displayText: 'IP ADDRESS'},
		{name: 'imie',displayText: 'IMIE',type: 'String'},
		{name: 'deviceIdentifier',displayText: 'IDENTIFIER'},
		{name: 'deviceName',displayText: 'NAME'},
		{name: 'deviceManufacturer', displayText: 'MANUFACTURER'},
		{name: 'additionalParams',displayText: 'ADDITIONAL PARAMS'},
	];
	render() {
		return (
		<span> AUDIT TRAIL </span>
		);
	} 
}

export default AuditTrail;