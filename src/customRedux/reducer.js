let state = 0;

function updateState(state, action) {
	if (action.type === "INCREMENT") {
		return state + action.amount;
	} else if (action.type === "DECREMENT") {
		return state - action.amount;
	} else {
		return state;
	}
}

state = updateState(state, {type: "INCREMENT", amount: 5});
console.log(state);

state = updateState(state, {type: "DECREMENT", amount: 3});
console.log(state);

state = updateState(state, {type: "NOTHING"});
console.log(state);