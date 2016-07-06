// import external

import React from 'react';

// export

export default class Main extends React.Component {

	render () {

		const {state} = this.props;

		return (
			<main>
				main
				{JSON.stringify(state.bookmarks)}
			</main>
		);
	}

}
