'use strict'
import {getInitialWarmup, getInitialExercise, getInitialWorkoutPlan, getInitialUserSettings , getInitialState}  from './initial-states.js';
import {getChosenWorkout} from './methods.js';
import {DEFAULT_WARMUP_NAME} from './constants.js';


//get initialState  - from getInitialState or TODO local-storage

//put state

//render by state on load

//show the workouts page by state onload

//on btn click on create new workout or a specific workout go to a single-workout page with either no data or existing exercises

//on btn save workout save the current exercises into a new workout and add it to workouts in the state

//on btn click on back to workouts go to workout

//on btn click play workout

const playButtonEl  = document.querySelector(".play-button");

playButtonEl.addEventListener('click',
    (event)=>{
        //TODO get the
        startWorkoutPlan(chosenWorkout);
    }
);




