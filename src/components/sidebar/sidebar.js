import React from 'react'
import NavItem from 'react-bootstrap/lib/NavItem'
import Nav from 'react-bootstrap/lib/Nav'
import { Link, browserHistory } from 'react-router'
class SideBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {selected: 'auditTrail'}
	}
	getInitialState(){
		return {
			selected: 'auditTrail'
		}
	}
	handleSelect (selectedKey){
		this.setState({selected: selectedKey});
		browserHistory.push(selectedKey);
	}
	render() {
		return (
		<Nav stacked bsStyle="pills" activeKey={this.state.selected} onSelect={this.handleSelect.bind(this)} >
	        <NavItem eventKey={'auditTrail'} href="/auditTrail"> AUDIT TRAIL </NavItem>
	        <NavItem eventKey={'agents'} href="/agents"> AGENTS </NavItem>
	        <NavItem eventKey={'users'} href="/users"> USERS </NavItem>
	        <NavItem eventKey={'stateCity'} href="/stateCity"> STATE/CITY </NavItem>
        </Nav>
		);
	} 
}
export default SideBar;