// utilities

import Store from '../utilities/store';

// instances

import dispatchers from '../dispatchers';
import constantIndex from '../constants';
import actionIndex from '../actions';

// alias

const actions = actionIndex.popup;
const constants = constantIndex.popup;
const dispatcher = dispatchers.popup;

// export

class PopupStore extends Store {

	constructor () {
		super({
			impequid: {
				server: 'impequid.com',
				username: 'username',
				token: 'example-token'
			},
			bookmarks: {}
		});
		this.emitChange = this.emitChange.bind(this);
	}

	emitChange () {
		// saving changes to chrome storage
		chrome.storage.sync.set({state: this.state});

		// emit change event
		this.emit('CHANGE');
	}

	handleAction (action) {
		const that = this;
		const {state} = this;

		const {type, data} = action;

		console.info('popup-store', type);

		switch (type) {
			case constants.hydrate:
				// get last state from chrome storage

				chrome.storage.sync.get('state', items => {
					Object.assign(state, items.state);
					that.emitChange();
				});
			break;
			case constants.refreshBookmarks:
				chrome.bookmarks.getTree(tree => {
					state.bookmarks = tree;
					that.emitChange();
				});
			break;
		}

		that.emitChange();
	}

}

const store = new PopupStore();

store.register(dispatcher);

export default store;
