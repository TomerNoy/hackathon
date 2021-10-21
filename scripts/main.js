'use strict'

//constants
const DEFAULT_WARMUP_NAME = 'Warming up';

//basic initial structures

//initialWarmup
const initialWarmup = {
    time: null, //warmup time
    defaultName =DEFAULT_WARMUP_NAME,
    name: null
};
getInitialWarmup = ()=> {
    return {...initialWarmup}
}

//initialExercise
const initialExercise = {
    name: null, //exercise name ie "pushups"
    workoutTime: null, //in seconds
    sets: 1,
    restTime:null, //in seconds
};
getInitialExercise = ()=> {
    return {...initialExercise};
}

//initialWorkoutPlan
const initialWorkoutPlan = {
    exercises:[], //list of all exercises in the workout plan
    warmUp:null, //
    coolDown:null
};
getInitialWorkoutPlan = ()=> {
    return {...initialWorkoutPlan};
}


//TODO initialUserSettings
const initialUserSettings = {
    backgroundColor:null
};

getInitialUserSettings = {
    return {...initialUserSettings};
}


//TODO state object for the app
const intervalAppState = {
    workouts: [],
    userSettings: {}
};
//TODO immutable state changes?


//CRUD functions - for exercises
//create function
const createNewExercise = (exerciseList, newExercise) =>{
    const newExerciseList = exerciseList.concat([newExercise]);
    return newExerciseList;
};

//read/get function
const getExercise = (workout, exerciseIdx) => {
    return workout[exerciseIdx];
};

//update function
const updateExercise = (originalExerciseIdx , newExercise) =>{
    const newList = list.map((currExercise, currExerciseIdx) => {
        return currExerciseIdx === originalExerciseIdx ? newExercise : currExercise;
    });
   return newList;
};
//delete function
const deleteExercise = (exercises, exerciseIdxToDelete) => {
    const newExerciseList = exercises.filter((_, currExerciseIdx) => {
        return currExerciseIdx !== exerciseIdxToDelete
    })
    return newExerciseList;
}


//TODO CRUD functions - for workouts





//TODO Render methods for an exercise
const renderExercise = (exercise) =>{
    let [name, time, sets] = exercise;
    let exerciseHTMLStr = `<div>${name} ${time} ${sets}<br/></div>`;
    return exerciseHTMLStr;
};


//TODO Render methods for a exercise list
const renderExerciseList  = (exerciseList) =>{
    return exerciseList.map( (exercise) => {
        return renderExercise(exercise)
    }).join("");
}

//TODO Render methods for a workout
const renderWorkout = (exercise) =>{
    let workOutHTMLStr = '';
    // let [name, time, sets] = exercise;
    // let exerciseHTMLStr = `<div>${name} ${time} ${sets}<br/></div>`;
    return workoutHTMLStr;
};

//TODO Render methods for a workout list
const renderExerciseList  = (workoutList) =>{
    return workoutList.map( (workout) => {
        return renderWorkout(workout)
    }).join("");
}






//TODO make fake exercises and workouts for testing and filling





//TODO general render methods if possible, with the reference material below
// const renderOne = (obj, templateStr) => {
//     `<div> ${$.time} minutes for
//     the exercise ${$.name} </div>`
// }
// const renderMany = (list, renderOneApp) => {

// }
// So far, we've looked at using Template Strings for string substitution and for creating multiline strings.
// Another powerful feature they bring is tagged templates. Tagged Templates transform a Template String by
// placing a function name before the template string. For example:
// fn`Hello ${you}! You're looking ${adjective} today!`
// The semantics of a tagged template string are very different from those of a normal one.
// In essence, they are a special type of function call: the above "desugars" into
// fn(["Hello ", "! You're looking ", " today!"], you, adjective);
//another example
// const renderElem = ($) => {return `<div> ${$.time} minutes for
//  the exercise ${$.name} </div>`};
// renderElem({time: '5000', name:'pushups'});
// const renderElem = ($) => {return `<div> ${$.time} minutes for the exercise ${$.name} </div>`};
// renderElem({time: '5000', name:'pushups'});
