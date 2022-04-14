import React, { useReducer } from 'react'
const initialState = 0;
const reducerFunction = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;

        default:
            return state;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducerFunction, initialState)

    const incrementHandle = () => {
        dispatch({
            type: "INCREMENT"
        })
    }
    const decrementHandle = () => {
        dispatch({
            type: "DECREMENT"
        })
    }

    return (
        <div>
            <h1>Welcome to React useReducer with React 18.</h1>
            <div>Initial Count {initialState} </div>
            <div>Initial Count {state} </div>
            <button onClick={incrementHandle}>Increment Me</button>
            <button onClick={decrementHandle}>Decrement Me</button>
        </div>
    )
}

export default App