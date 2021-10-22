
'use strict'
export const getChosenWorkout = () =>{
    return window.intervalAppState.chosenWorkout;
};
export const getFromState = (key) =>{
    return window.intervalAppState['key'];
};
export const setState = (key,val) =>{
    return window.intervalAppState[key] = val;
};
export const startWorkoutPlan = (elemRef) =>{
    const chosenWorkout = getChosenWorkout();
}

//TODO
//make clock page appear and hide the other pages


//go over workout warmup, exercises, and cooldown and run workout  on clock as long as there is a work


//go back to workout page

