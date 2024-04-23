import React from 'react';
import { createStore } from 'redux';

const reducer =(state = 0, action)=>{
    if(action.type === 'INCREAMENT'){
        return state + 1;
    }else if(action.type === 'DECREAMENT'){
        return state - 1;
    }
    return state;
}

const store = createStore(reducer);

store.subscribe(()=>{
    console.log('currentState ', store.getState());
})

store.dispatch({
    type:'INCREAMENT',
})