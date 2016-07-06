// import external

import React from 'react';

// export

export default class Header extends React.Component {

	render () {

		const {state} = this.props;

		return (
			<main className="container">
				<br/>
				<h3>1. Enter your Impequid server.</h3>
				<fieldset className="form-group">
					<input type="text" value={state.impequid.server} className="form-control"/>
					<small className="text-muted">Enter your Impequid server here. Don't have one yet? Use <a href="https://impequid.com/register">this server</a> or <a href="https://github.com/dodekeract/impequid/tree/master/documentation/setup-guide.md">set-up your own</a>.</small>
				</fieldset>
				<h3>2. Get a token</h3>
				<a className="btn btn-success" href={`https://${state.impequid.server}/authenticate/dns.smartfl.at/background[bookmarks]`} target="_blank">Get Token</a>
				<br/>
				<br/>
				<h3>3. Paste and Verify</h3>
				<fieldset className="form-group">
					<input type="text" value={state.impequid.token} className="form-control"/>
					<small className="text-muted">Paste the token here.</small>
				</fieldset>
				<div className="btn btn-success">Verify</div>
			</main>
		);
	}

}
