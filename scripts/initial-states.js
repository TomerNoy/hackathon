'use strict'
import {DEFAULT_WARMUP_NAME, DEFAULT_COOLDOWN_NAME} from './constants.js'
//basic initial structures
//initialWarmup
const initialWarmup = {
    time: null, //warmup time
    defaultName: DEFAULT_WARMUP_NAME,
    name: null
};
export const getInitialWarmup = ()=> {
    return {...initialWarmup}
}

const initialCooldown = {
    time: null, //cooldown time
    defaultName :DEFAULT_COOLDOWN_NAME,
    name: null
};
export const getInitialCooldown = ()=> {
    return {...initialCooldown}
}

//initialExercise
export const  initialExercise = {
    name: null, //exercise name ie "pushups"
    workoutTime: null, //in seconds
    sets: 1,
    restTime:null, //in seconds
};
export const getInitialExercise = ()=> {
    return {...initialExercise};
}

//initialWorkoutPlan
const initialWorkoutPlan = {
    exercises:[], //list of all exercises in the workout plan
    warmUp:null, //
    coolDown:null
};
export const  getInitialWorkoutPlan = ()=> {
    return {...initialWorkoutPlan};
}


//TODO initialUserSettings
const initialUserSettings = {
    backgroundColor:null
};

export const getInitialUserSettings = ()=> {
    return {...initialUserSettings};
}


//TODO state object for the app
const intervalAppState = {
    workouts: [],
    chosenWorkout:null,
    userSettings: {}
};
//TODO immutable state changes? deep clone?
export const  getInitialState = () => {
    return {...intervalAppState};
}
