import React from 'react';

var style = {
	text: {
		color: '#9d9d9d'
	},
	year: {
		color: '#30a5ff'
	}
}
class Footer extends React.Component{
	render() {
		return (
		<div>
		    <span style={style.text}>&copy; GoldenGate Admin </span><span style={style.year}>2016</span>
        </div>
		);
	} 
}
export default Footer;