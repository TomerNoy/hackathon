'use strict'

//THIS IS FAKE DATA UNTIL CONNECTED TO THE REAL FORM
//USE FOR TESTING THE FUNCTIONS AND FOR SEEING THE DATA REPRESENTATION

//TODO make fake exercises and workouts for testing and filling

const pushupsExercise = {
    name:'pushups',
    sets:3,
    workoutTime:60,
    restTime:30
};

const pullupsExercise =     {
    name:'pullups',
    sets:5,
    workoutTime:60,
    restTime:30
};

const sprintsExercise =  {
    name:'sprints',
    sets:2,
    workoutTime:60,
    restTime:30
};

const exercisesList = [
    pushupsExercise,
    pullupsExercise,
    sprintsExercise
]
const workout1 = {
    name:'workout for home',
    exercises:exercisesList,
    totalTime:5000,
    warmUpTime:null, //
    coolDownTime:null
};
const workout2 = {
    name:'workout for hotel',
    exercises:exercisesList,
    totalTime:3000,
    warmUpTime:null, //
    coolDownTime:null
};

const demoData = {
    workouts:[
        workout1,
        workout2
    ]
};

export const getDemoData = () =>{
    return demoData;
}

// let util = require('util');
// console.log(util.inspect(getDemoData(),{showHidden: false, depth: null, colors: true}));

let state = getDemoData;
