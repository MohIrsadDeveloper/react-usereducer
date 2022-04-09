// Action Creator
// Person who is submitting the form
const newBooking = (name,amount) => {
    return {
        type : "NEW_BOOKING",
        payload : {
            name,
            amount
        }
    }
}
const cancelBooking = (name,refundAmount) => {
    return {
        type : "CANCEL_BOOKING",
        payload : {
            name,
            refundAmount
        }
    }
}


// Reducer
const reservationHistory = (oldReservationList=[], action) => {
    if (action.type === "NEW_BOOKING") {
        return [...oldReservationList, action.payload]
    } else if (action.type === "CANCEL_BOOKING") {
        return oldReservationList.filter(record => {
            return record.name !== action.payload.name;
        })
    }
    return oldReservationList
}
const cancellationHistory = (oldcancellationList=[], action) => {
     if (action.type === "CANCEL_BOOKING") {
        return [...oldcancellationList, action.payload];
    }
    return oldcancellationList
}
const accounting = (totalMoney = 100, action) => {
    if (action.type === "NEW_BOOKING") {
        return totalMoney + action.payload.amount;
    }
     if (action.type === "CANCEL_BOOKING") {
        return totalMoney - action.payload.refundAmount
    }
    return totalMoney;
}

// Redux Store
console.log(Redux);

const { createStore, combineReducers } = Redux;

const railwayCentralStore = combineReducers({
    reservationHistory : reservationHistory,
    accounting : accounting,
    cancellationHistory : cancellationHistory
})

const store = createStore(railwayCentralStore);

const action = newBooking("Abdul", 30);
store.dispatch(action);
store.dispatch(newBooking("Asma", 20));
store.dispatch(newBooking("Ayesha", 10));
store.dispatch(cancelBooking("Abdul", 20));
// store.dispatch(action);
// store.dispatch(action);
console.log(store.getState());