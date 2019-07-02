function updateState(state, action) {
	if (action.type === "INCREMENT") {
		return state + action.amount;
	} else if (action.type === "DECREMENT") {
		return state - action.amount;
	} else {
		return state;
	}
}

function createStore(updateState, state) {
	let _updateState = updateState;
	let _state = state;

	function getState() {
		return _state;
	}

	function update(action) {
		_state = _updateState(_state, action);
	}

	return {getState, update};
}

const store = createStore(updateState, 0);

const incrementAction = {type: "INCREMENT", amount: 5};
const decrementAction = {type: "DECREMENT", amount: 3};

store.update(incrementAction);
console.log(store.getState());

store.update(decrementAction);
console.log(store.getState());

store.update({});
console.log(store.getState());