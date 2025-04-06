import { createStore } from "@reduxjs/toolkit";
function reducerDemo(incomingObject, action) {
    // increment
    if(action.type == 'increment') {
        return {
          ...incomingObject,
           number: incomingObject.number + 1
        };
    }
    // decrement
    else if(action.type == 'decrement') {
        return {
          ...incomingObject,
           number: incomingObject.number - 1
        };
    }
    // add
    else if(action.type == 'add') {
      const numberadd = action.payload;
       return {
          ...incomingObject,
           number: incomingObject.number + numberadd
        };
    }
    // subtract
    else if(action.type == 'subtract') {
      const numbersubtract = action.payload;
      return {
          ...incomingObject,
           number: incomingObject.number - numbersubtract
        };
    }
    else {
      return incomingObject;
    }
}

const initialState =  { number: 0 };
const store = createStore(reducerDemo ,initialState);
//console.log(store);
console.log(store.getState());
store.dispatch({type: 'increment'});
console.log(store.getState());
store.dispatch({type: 'add', payload: 200});
console.log(store.getState());
store.dispatch({type: 'decrement'});
console.log(store.getState());
store.dispatch({type: 'subtract', payload: 100});
console.log(store.getState());
