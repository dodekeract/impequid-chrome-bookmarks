// import internal

import dispatchers from '../dispatchers';
import constants from '../constants';

// alias

const d = dispatchers.popup;
const c = constants.popup;

// export

export default {
	popup: {
		refreshBookmarks () {
			d.dispatch({
				type: c.refreshBookmarks
			});
		},
		hydrate () {
			d.dispatch({
				type: c.hydrate
			});
		}
	}
};
