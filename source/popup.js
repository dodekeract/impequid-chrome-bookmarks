// import external

import React from 'react';
import ReactDOM from 'react-dom';

// import internal

import './stores/popup.js';
import actions from './actions';

// import components

import Layout from './components/layout';

// render

window.onload = () => {
	ReactDOM.render(<Layout/>, document.getElementById('app'));
	actions.popup.hydrate();
};
