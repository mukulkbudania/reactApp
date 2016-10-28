import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavDropDown from 'react-bootstrap/lib/NavDropdown';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';

var logo = require('./goldengate.png');
var color = {
	color: '#30a5ff'
};
var styles = {
	logo : {
		display: 'none',
		height: '60px',
		marginTop: '-20px'
	},
	title : {
		marginTop: '-15px',
		display: 'inline-block'
	}
}
class Header extends React.Component{
	render() {
		return (
		<Navbar inverse fixedTop>
		    <NavbarHeader>
		      <NavbarBrand>
		      <div>
		        <img src={logo} style={styles.logo}/>
		        <div style={styles.title}><span style={color}>GOLDENGATE </span>
		        <span>ADMIN</span></div>
		      </div>  
		      </NavbarBrand>
		      <NavbarToggle />
		    </NavbarHeader>
		      <Nav pullRight>
		        <NavDropDown eventKey={1} title="UserName" id="user">
		        	<MenuItem eventKey={1.1}> Logout </MenuItem>
		        </NavDropDown>
		      </Nav>
        </Navbar>
		);
	} 
}
export default Header;