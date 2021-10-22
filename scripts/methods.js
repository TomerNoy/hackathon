
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

export const goToWorkoutsPage = () =>{
    let body = document.body;
    body.classList.remove('workout-page','play-page');
    body.classList.add('workouts-page');
}

export const goToWorkoutPage = () =>{
    let body = document.body;
    body.classList.remove('workouts-page','play-page');
    body.classList.add('workout-page');
}

// export const goToPlayPageAndPlay = () =>{
//     let body = document.body;
//     body.classList.remove('workouts-page','workout-page');
//     body.classList.add('play-page');
//     let workoutToPlay = getChosenWorkout();

//     //TODO PLAY THE workoutToPlay and when it finishes exercise show the backToWorkous page and succcess message

// }

//TODO
// export const playWorkout = (workout) =>{

// }


//TODO calculate totaltime of workout

export const getWorkoutTotalTime = ({warmupTime, exercises, cooldownTime})=>{
    let totalWorkoutTime = warmUpTime + coolDownTime;
    exercises.forEach( (exercise) => {
        let exerciseTime = exercises.sets * (exercise.workoutTime + exercise.restTime);
        totalWorkoutTime+=exerciseTime;
    });
    return totalWorkoutTime;
}
