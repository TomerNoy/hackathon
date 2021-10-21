
//TODO Render methods for an exercise
export const renderExercise = (exercise) =>{
    let [name, time, sets] = exercise;
    let exerciseHTMLStr = `<div>${name} ${time} ${sets}<br/></div>`;
    return exerciseHTMLStr;
};


//TODO Render methods for a exercise list
export const renderExerciseList  = (exerciseList) =>{
    return exerciseList.map( (exercise) => {
        return renderExercise(exercise)
    }).join("");
}

//TODO Render methods for a workout
export const  renderWorkout = (exercise) =>{
    let workOutHTMLStr = '';
    // let [name, time, sets] = exercise;
    // let exerciseHTMLStr = `<div>${name} ${time} ${sets}<br/></div>`;
    return workoutHTMLStr;
};

//TODO Render methods for a workout list
export const renderExerciseList  = (workoutList) =>{
    return workoutList.map( (workout) => {
        return renderWorkout(workout)
    }).join("");
};


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




