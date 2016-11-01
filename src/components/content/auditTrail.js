import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { auditTrailActions as actions } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Table from '../table'
const mapStateToProps = ({table}) => table
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
const columns = [
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

const AuditTrail = (props) => {
	console.log('Audit Trail: ',props)
  return (
    <div>
      <h2> Food Nutrients List </h2>
      <Table columns={columns} {...props} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AuditTrail)