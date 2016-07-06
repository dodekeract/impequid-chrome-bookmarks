import EventEmitter from 'events';

const CHANGE = 'CHANGE';

export default class Store extends EventEmitter {
	constructor (state = {}) {
		super();
		this.state = state;
		this.getState = this.getState.bind(this);
	}

	getState () {
		return this.state;
	}

	emitChange () {
		this.emit(CHANGE);
	}

	addChangeListener (callback) {
		this.on(CHANGE, callback);
	}

	removeChangeListener (callback) {
		this.removeListener(CHANGE, callback);
	}

	register (dispatcher) {
		dispatcher.register(this.handleAction.bind(this));
	}
}
