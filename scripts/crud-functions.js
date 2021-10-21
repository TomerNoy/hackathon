
//CRUD functions - for exercises
//create function
export const createNewExercise = (exerciseList, newExercise) =>{
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
