const {createStore} = require('redux');

function reducer(state, action) {
	if (action.type === "INCREMENT") {
		return {count: state.count + action.amount};
	} else if (action.type === "DECREMENT") {
		return {count: state.count - action.amount};
	} else {
		return state;
	}
}

const initialState = {count: 0};

const store = createStore(reducer, initialState);

const incrementAction = {type: "INCREMENT", amount: 5};
const decrementAction = {type: "DECREMENT", amount: 3};
const nothingAction = {type: ""};

const unsubscribe = store.subscribe(() => console.log("State changed one", store.getState().count));
store.subscribe(() => console.log("State changed two", store.getState().count));

store.dispatch(incrementAction);
unsubscribe();
store.dispatch(decrementAction);
store.dispatch(nothingAction);