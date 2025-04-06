import { createStore, combineReducers} from "redux";
const initialState =  { number1: 0 , number2: 10};

// number reducer 1
function numberReducer1Demo(incomingObject = initialState, action) {
    // increment
    if(action.type == 'increment') {
        return {
          ...incomingObject,
           number1: incomingObject.number1 + 1
        };
    }
    // decrement
    else if(action.type == 'decrement') {
        return {
          ...incomingObject,
           number1: incomingObject.number1 - 1
        };
    }
    else {
      return incomingObject;
    }
}


// number reducer 2
function numberReducer2Demo(incomingObject = initialState, action) {
    // add
    if(action.type == 'add') {
      const numberadd = action.payload;
       return {
          ...incomingObject,
           number2: incomingObject.number2 + numberadd
        };
    }
    // subtract
    else if(action.type == 'subtract') {
      const numbersubtract = action.payload;
      return {
           ...incomingObject,
           number2: incomingObject.number2 - numbersubtract
        };
    }
    else {
      return incomingObject;
    }
}

const rootReducer = combineReducers({
    number1Red: numberReducer1Demo,
    number2Red: numberReducer2Demo
});


const store = createStore(rootReducer);
// store.subscribe(() => {
//   console.log('store has updated');
//   console.log(store.getState().number1Red.number1);
//   console.log(store.getState().number2Red.number2);
//  });

//console.log(store);
//console.log(store);
//console.log(store.getState());
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
//console.log(store.getState());
store.dispatch({type: 'add', payload: 200});
 //console.log(store.getState());
store.dispatch({type: 'decrement'});
// // console.log(store.getState());
 store.dispatch({type: 'subtract', payload: 1});
// // console.log(store.getState());
console.log(store.getState().number1Red.number1);
console.log(store.getState().number2Red.number2);
