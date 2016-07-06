// import external

import React from 'react';

// export

export default class Header extends React.Component {

	render () {
		return (
			<header className="navbar navbar-static-top navbar-dark bg-inverse custom-noradius">
				<div className="container">
					<ul className="nav navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" href="/">Status</a>
						</li>
					</ul>
					<ul className="nav navbar-nav pull-xs-right">
						<li className="nav-item">
							<a className="nav-link active" href="/settings">Settings</a>
						</li>
					</ul>
				</div>
			</header>
		);
	}

}
