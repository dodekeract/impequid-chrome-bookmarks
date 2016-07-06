// import external

import React from 'react';
import {RouterMixin} from 'react-mini-router';

// import internal

import store from '../stores/popup';

// import components

import Header from './header';
import Main from './main';
import Settings from './settings';

// export

const Layout = React.createClass({

	mixins: [RouterMixin],

	routes: {
		'/': 'main',
		'/settings': 'settings'
	},

	getInitialState: store.getState,

	componentDidMount () {
		store.addChangeListener(this.onChange);
	},

	componentWillUnmount () {
		store.removeChangeListener(this.onChange);
	},

	render () {
		return (
			<div style={{minWidth: '400px'}}>
				<Header/>
				{this.renderCurrentRoute()}
			</div>
		);
	},

	main () {
		return (<Main state={this.state}/>);
	},

	settings () {
		return (<Settings state={this.state}/>);
	},

	onChange () {
		this.setState(store.getState());
	}

});

export default Layout;
