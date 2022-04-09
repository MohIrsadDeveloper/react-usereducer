import React, { useReducer } from 'react'
const initialData = [];
const reservationHistory = (oldReservationList=initialData, action) => {
    switch (action.type) {
      case "NEW_BOOKING":
        return [...oldReservationList, action.payload];
      case "CANCEL_BOOKING" :
        return oldReservationList.filter(record => {
          return record !== action.payload.name;
        })
      default:
        return oldReservationList;
    }
}

const App = () => {
  const [oldReservationList, dispatch] = useReducer(reservationHistory, initialData)
  const newBooking = (name,amount) => {
    dispatch({
      type : "NEW_BOOKING",
      payload : {
        name,
        amount
      }
    })
  }
  const cancelBooking = (name,RefundAmount) => {
    dispatch({
      type : "CANCEL_BOOKING",
      payload : {
        name,
        RefundAmount
      }
    })
  }
  return (
    <div>
      <h1>Welcome to Ticket Booking.</h1>
      <button onClick={newBooking}>New Booking</button>
      <button onClick={cancelBooking}>New Booking</button>
    </div>
  )
}

export default App