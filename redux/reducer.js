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
          number: incomingObject.number - 1
        };
    }
    // add
    else if(action.type == 'add') {
      const numberadd = action.payload;
       return {
          number: incomingObject.number + numberadd
       };
    }
    // subtract
    else if(action.type == 'subtract') {
      const numbersubtract = action.payload;
       return {
          number: incomingObject.number - numbersubtract
       };
    }
    else {
      return incomingObject;
    }
}

const init =  { number: 15 };
console.log(reducerDemo(init, {type: 'increment', payload: null}));
console.log(reducerDemo(init, {type: 'decrement', payload: null}));
console.log(reducerDemo(init, {type: 'add', payload: 20}));
console.log(reducerDemo(init, {type: 'subtract', payload: 5}));
