import React from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import Header from './components/header/header'
import SideMenu from './components/sidebar/sidebar'
import Footer from './components/footer/footer'

class Layout extends React.Component{
	render(){
		return (
			<div>
				<div id='header'><Header /></div>
				<div id='displayContent' >
					<div id='sidemenu'><SideMenu selected={this.props}/></div>
					<div id='content'>{this.props.children}</div>
				</div>
				<div id='footer'><Footer /></div>
			</div>
			);
	}
}
export default Layout;
