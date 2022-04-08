import React, { useReducer } from 'react'

const initialState = 0;
const reducerFunction = (initialState, dispatch) => {
        if (dispatch.type === "INCREMENT") {
            return initialState+1;
        } else if (dispatch.type === "DECREMENT")
        {
            return initialState-1;
        }
}

const App = () => {
    const [newState, dispatch] = useReducer(reducerFunction, initialState)

    const clickHandle = () => {
        dispatch({
            type : "INCREMENT"
        });
    }
    const clickHandle2 = () => {
        dispatch({
            type : "DECREMENT"
        });
    }

  return (
    <div>
        <h1>
            {initialState}
            <br />
            {newState}
        </h1>
        <button onClick={clickHandle}>Increment</button>
        <button onClick={clickHandle2}>Decrement</button>
    </div>
  )
}

export default App