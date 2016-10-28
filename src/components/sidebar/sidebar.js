import React from 'react'
import NavItem from 'react-bootstrap/lib/NavItem'
import Nav from 'react-bootstrap/lib/Nav'
import { Link, browserHistory } from 'react-router'
class SideBar extends React.Component{

	handleSelect (selectedKey){
		console.log('Should navigate to /' + selectedKey)
		browserHistory.push(selectedKey);
	}
	render() {
		console.log('SideBar Props: ', this.props);
		return (
		<Nav stacked bsStyle="pills" activeKey={this.props.selected} onSelect={this.handleSelect.bind(this)} >
	        <NavItem eventKey={'auditTrail'} href="/auditTrail"> AUDIT TRAIL </NavItem>
	        <NavItem eventKey={'agents'} href="/agents"> AGENTS </NavItem>
	        <NavItem eventKey={'users'} href="/users"> USERS </NavItem>
	        <NavItem eventKey={'stateCity'} href="/stateCity"> STATE/CITY </NavItem>
        </Nav>
		);
	} 
}
export default SideBar;