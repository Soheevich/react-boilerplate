function reducer(state, action) {
	if (action.type === "INCREMENT") {
		return {count: state.count + action.amount};
	} else if (action.type === "DECREMENT") {
		return {count: state.count - action.amount};
	} else {
		return state;
	}
}

function createStore(reducer, state) {
	let _reducer = reducer;
	let _state = state;
	let _callbacks = [];

	function getState() {
		return _state;
	}

	function dispatch(action) {
		_state = _reducer(_state, action);
		_callbacks.forEach(callback => callback());
	}

	function subscribe(callback) {
		_callbacks.push(callback);
		return () => _callbacks = _callbacks.filter(cb => cb !== callback);
	}

	return {getState, dispatch, subscribe};
}

const initialState = {count: 0};

const store = createStore(reducer, initialState);

const incrementAction = {type: "INCREMENT", amount: 5};
const decrementAction = {type: "DECREMENT", amount: 3};

const unsubscribe = store.subscribe(() => console.log("State changed one", store.getState().count));
store.subscribe(() => console.log("State changed two", store.getState().count));

store.dispatch(incrementAction);
unsubscribe();
store.dispatch(decrementAction);
store.dispatch({});