'use strict'
import {getInitialWarmup, getInitialExercise, getInitialWorkoutPlan , getInitialState}  from './initial-states.js';
import {getChosenWorkout, goToPlayPageAndPlay, goToWorkoutPage, goToWorkoutsPage} from './methods.js';
import {getDemoData} from './data.js'
import {createExercise, updateExercise, deleteExercise, getExercise} from './crud-functions.js';
import {createWorkout, updateWorkout, deleteWorkout, getWorkout} from './crud-functions.js';
import {renderExercise,renderExerciseList,renderWorkout, renderWorkoutList} from './render-functions.js';

//get initialState  - from getInitialState or TODO local-storage
const initialState =  getInitialState();

//TODO if script needs to work only after elements loaded put everything inside the event listener
// window.addEventListener('load',()=>{
// });


window.addEventListener('load',()=>{
    console.log('loaded');
//put state
let appState = initialState;

//for testing
// let appState = getDemoData();

window.intervalAppState = appState;

// const appState = intervalAppState;
//test fake data
console.log(getDemoData());

//render by state on load
const workoutListEl = document.querySelector(".workoutsList");
//show the workouts page by state onload
console.log(appState.workouts);
workoutListEl.innerHTML = renderWorkoutList(appState.workouts);

});


//on btn click on create new workout or a specific workout go to a single-workout page with either no data or existing exercises
const submitBtn = document.querySelector("form");

submitBtn.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log([...e.target.elements]);
    let formValues = [...e.target.elements]
        //give me only form inputs with non empty value - exclude button el and the like
        .filter(
         (el) => el.value != '')
         //with reduce assemble an object with key:value pairs of the form values
        .reduce(
            (prev,curr) => {
                prev[curr.name] =  curr.value;
                return prev;
            }
            ,{}); //reduce initial starting value - an empty object - to contain all form values by inputname:inputvalue
    console.log(formValues);
});

//adding event listeners for moving pages
//click on access a specific workout page
const goToSpecificWorkoutPage = document.querySelector("#addWorkout");
goToSpecificWorkoutPage.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('ADDWORKOUTbtn');
    goToWorkoutPage();
});

//do on click on add workout btn - open the workout page
const addWorkoutBtn = document.querySelector("#addWorkout");
addWorkoutBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('ADDWORKOUTbtn');
    goToWorkoutPage();
});

//do on click on back to workouts btn
const backToWorkoutBtn = document.querySelector("#backButton");
backToWorkoutBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('BACKTOWORKOUTSbtn');
    goToWorkoutsPage();
});

//click on save a workout
const saveWorkoutBtn = document.querySelector("#saveWorkout");
saveWorkoutBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('saveWorkoutSbtn');
    //TODO save the workout in the workout-list in state before moving to the page there


    //go the workouts page
    goToWorkoutsPage();
});

const playBtnOnWorkoutsPage = document.querySelector('.workout-short .fa-play');
playBtnOnWorkoutsPage.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log('playbtnfromworkoutsPageSbtn');
    //set the chosen workout as the one that is clicked
    goToPlayPageAndPlay();
});
//on btn save workout save the current exercises into a new workout and add it to workouts in the state

//on btn click on back to workouts go to workout



//on btn click play workout

// const playButtonEl  = document.querySelector(".play-button");
// playButtonEl.addEventListener('click',
//     (event)=>{
//         //TODO get the
//         // startWorkoutPlan(chosenWorkout);
//     }
// );




