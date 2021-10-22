'use strict'
//CRUD functions - for exercises
//create function
export const createWorkout = (exerciseList, newExercise) =>{
    const newExerciseList = exerciseList.concat([newExercise]);
    return newExerciseList;
};

//read/get function
export const getExercise = (workout, exerciseIdx) => {
    return workout[exerciseIdx];
};

//update function
export const updateExercise = (originalExerciseIdx , newExercise) =>{
    const newList = list.map((currExercise, currExerciseIdx) => {
        return currExerciseIdx === originalExerciseIdx ? newExercise : currExercise;
    });
   return newList;
};
//delete function
export const deleteExercise = (exercises, exerciseIdxToDelete) => {
    const newExerciseList = exercises.filter((_, currExerciseIdx) => {
        return currExerciseIdx !== exerciseIdxToDelete
    })
    return newExerciseList;
}


//TODO CRUD functions - for workouts

//create workout
export const createWorkout = (workoutList, newWorkout) =>{
    const newWorkoutList = workoutList.concat([newWorkout]);
    return newWorkoutList;
};
//read/get function
export const getWorkout = (workoutList, workoutIdx) => {
    return workoutList[workoutIdx];
};

//update function
export const updateWorkout = (originalWorkoutIdx , newWorkout) =>{
    const newList = list.map((currWorkout, currWorkoutIdx) => {
        return currWorkoutIdx === originalWorkoutIdx ? newWorkout : currWorkout;
    });
   return newList;
};
//delete function
export const deleteWorkout = (workouts, workoutIdxToDelete) => {
    const newWorkoutList = workouts.filter((_, currWorkoutIdx) => {
        return currWorkoutIdx !== workoutIdxToDelete
    })
    return newWorkoutList;
}
