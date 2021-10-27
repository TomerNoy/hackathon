const workouts = []; // each workout contains also a list of exercises
let workoutTemp = {}; // temp workout for workout page
let interval; // global countdown timer so we can cancel on demand

let currentPage = 0; //0 workouts, 1 workout, 2 play
let workoutIndex = -1 // on edit mode this changes to workoutTemp index

/// nodes we wil use later on
const workoutsPage = document.getElementsByClassName('workouts')[0];
const workoutPage = document.getElementsByClassName('workout')[0];
const playPage = document.getElementsByClassName('play')[0];
const form = document.forms.myform;
const savedExercises = document.getElementsByClassName('savedExercises')[0];
const workoutsList = document.getElementsByClassName('workoutsList')[0];
const timer = document.getElementById('timer');
const playTitle = document.getElementById('playTitle');
const addWorkout = document.getElementById('addWorkout');
const addExercise = document.getElementById('addExercise');
const saveWorkout = document.getElementById('saveWorkout');
const play2workouts = document.getElementById('play2workouts');
const workout2workouts = document.getElementById('workout2workouts');
const end_exercise_audio = new Audio('../assets/end-exercise-beep.wav');

const pages = [workoutsPage, workoutPage, playPage];

/// move to page by index 0-2 by using html display = none/block
const moveToPage = (i) => {
    for (let p in pages)
        pages[p].style.display = p === `${i}` ? 'block' : 'none';
}

/// add workout button
addWorkout.addEventListener('click', (e) => {
    // resetting workout
    workoutTemp = { warmup: 0, cooldown: 0, exercises: [] };
    moveToPage(1);
});

form.addEventListener('change', function () {
    updateTotal();
});

/// add exercise button
addExercise.addEventListener('click', (e) => {
    e.preventDefault();

    const exerciseName = form.elements.exerciseName.value;
    const sets = Number(form.elements.sets.value);
    const work = timeToSeconds(form.elements.work.value);
    const rest = timeToSeconds(form.elements.rest.value);

    // validate min requirements
    if (exerciseName === '') return alert('exercise name required');
    if (sets < 1) return alert('number of sets invalid');
    if (isNaN(work) || work < 1) return alert('work time cannot be empty');

    const exerciseTemp = {
        name: exerciseName, sets: sets, work: work, rest: rest
    };

    workoutTemp['exercises'].push(exerciseTemp);

    createExerciseElement(exerciseTemp);
    clearFormExercise();
});

/// creates exercise html element and add
function createExerciseElement(exercise) {

    const box = document.createElement('div');
    box.classList.add('box');

    const button = document.createElement('button');
    box.append(button);

    const name = document.createElement('p');
    name.textContent = exercise['name'];
    box.append(name);

    const sets = document.createElement('p');
    sets.textContent = exercise['sets'];
    box.append(sets);

    const work = document.createElement('time');
    work.textContent = timeFromSeconds(exercise['work']);
    box.append(work);

    const rest = document.createElement('time');
    rest.textContent = timeFromSeconds(exercise['rest']);
    box.append(rest);

    const rmIcon = document.createElement('i');
    rmIcon.classList.add('fas', 'fa-minus');
    rmIcon.style.color = '#e76f51';
    button.append(rmIcon);
    button.addEventListener('click', (e) => {

        /// remove from exercises list
        var index = getNodeIndex(box);
        workoutTemp['exercises'].splice(index, 1);

        ///rm self
        box.remove();
    });
    button.style.cursor = 'pointer';
    savedExercises.append(box);
};

/// clears exercise content from form
function clearFormExercise() {
    form.elements.exerciseName.value = '';
    form.elements.sets.value = 1;
    form.elements.work.value = '00:00';
    form.elements.rest.value = '00:00';
}

/// save workout and add to html list
saveWorkout.addEventListener('click', (e) => {
    const workoutName = form.elements.workoutName.value;

    if (workoutName === '') return alert('workout name required');
    if (workoutTemp['exercises'].length < 1) return alert('at least 1 exercise required');

    //todo edit or add?
    workoutTemp['name'] = workoutName;
    workoutTemp['warmup'] = timeToSeconds(form.elements.warmup.value);
    workoutTemp['cooldown'] = timeToSeconds(form.elements.cooldown.value);

    if (workoutIndex === -1) {
        /// handle new workout
        workouts.push(workoutTemp);

        // add to workouts list
        createWorkoutElement(workoutTemp);

    } else {
        /// handle edited workout
        workouts[workoutIndex] = workoutTemp;

        ///todo change existing workout with index of workoutIndex
        const box = workoutsList.children[workoutIndex];

        console.log(box.children[3]);

        /// change by indexes
        box.children[2].textContent = workoutTemp['name'];
        box.children[3].textContent = timeFromSeconds(getTotalTime(workoutTemp));
    }

    moveToPage(0);
    form.reset();
    savedExercises.innerHTML = '';

    /// reset index
    workoutIndex = -1;
});

/// creates workout html element and add
function createWorkoutElement(workout) {
    const box = document.createElement('div');

    const rmIcon = document.createElement('i');
    rmIcon.classList.add('fas', 'fa-minus');
    box.append(rmIcon);
    rmIcon.addEventListener('click', () => {
        ///find out box index and rm from workouts
        var index = getNodeIndex(box)
        workouts.splice(index, 1);

        /// remove from html
        box.remove();

    });
    rmIcon.style.cursor = 'pointer';
    rmIcon.style.color = '#e76f51';

    const edit = document.createElement('i');
    edit.classList.add('fas', 'fa-sliders-h');
    box.append(edit);
    edit.addEventListener('click', () => {
        workoutIndex = getNodeIndex(box);
        editWorkout(workout);
    });
    edit.style.cursor = 'pointer';
    edit.style.color = '#e9c46a';

    const p = document.createElement('p');
    p.textContent = workout['name'];
    box.append(p);

    const time = document.createElement('time');
    time.textContent = timeFromSeconds(getTotalTime(workout));
    box.append(time);

    const play = document.createElement('i');
    play.classList.add('fas', 'fa-play');
    play.style.transition = '0.3s';
    play.addEventListener('click', () => playWorkout(workout));
    play.style.cursor = 'pointer';
    play.style.color = '#2a9d8f';

    box.append(play);
    box.classList.add('box');
    workoutsList.append(box);
}

/// start a workout timers asyncronasly
async function editWorkout(workout) {

    moveToPage(1);
    workoutTemp = workout;

    // add workout values to form
    form.elements.workoutName.value = workout['name'];
    form.elements.cooldown.value = timeFromSeconds(workout['cooldown']);
    form.elements.warmup.value = timeFromSeconds(workout['warmup']);

    // add exercises to html list
    workout['exercises'].forEach(e => {
        createExerciseElement(e);
    });

}

/// start a workout timers asyncronasly
async function playWorkout(workout) {
    moveToPage(2);

    /// play warmup if it exists in the workout
    if(workout['warmup']){
        await playTimer(workout['warmup'], timer, 'WARMUP', playTitle);
    }

    /// play workouts
    const exercises = workout['exercises'];

    for (let x = 0; x < exercises.length; x++) {
        const sets = exercises[x]['sets'];

        for (let y = 0; y < sets; y++) {
            const work = exercises[x]['work'];
            const name = exercises[x]['name'];
            await playTimer(work, timer, name, playTitle);

            if (x !== exercises.length - 1 || y !== sets - 1) {
                const rest = exercises[x]['rest'];
                await playTimer(rest, timer, 'REST', playTitle);
            }
        }
    }

    /// play cooldown if it exists in the workout
    if(workout['cooldown']){
        await playTimer(workout['cooldown'], timer, 'COOLDOWN', playTitle);
    }

    playTitle.textContent = 'CONGRATZ'
    timer.textContent = 'DONE!'
}

/// back to workouts page buttons (we also clear timer interval)
play2workouts.addEventListener('click', () => {
    moveToPage(0);
    clearInterval(interval);
    timer.textContent = '00:00';
    playTitle.textContent = 'START';
});

/// back to workouts page (and reset workout form)
workout2workouts.addEventListener('click', () => {
    moveToPage(0);
    form.reset();
    savedExercises.innerHTML = '';
});

/// calc total workout time
function getTotalTime(workout) {
    const warmup = workout['warmup'];
    const cooldown = workout['cooldown'];

    let exercisesTime = 0;
    workout['exercises'].forEach(e => {
        const rest = e['rest'];
        const work = e['work'];
        const sets = e['sets'];
        exercisesTime += sets * (work + rest);
    });

    return warmup + cooldown + exercisesTime;

}

/// time string to seconds int
function timeToSeconds(time) {
    var b = time.split(':');
    return b[0] * 60 + +b[1];
}

/// seconds int to time string
function timeFromSeconds(seconds) {
    function z(n) { return (n < 10 ? '0' : '') + n; }
    var h = (seconds / 60 | 0) % 24;
    var m = seconds % 60;
    return z(h) + ':' + z(m);
}

/// countdown timer
function playTimer(duration, timer, titleName, title) {
    var t = duration, minutes, seconds;
    return new Promise(resolve => {
        interval = setInterval(() => {

            minutes = parseInt(t / 60, 10);
            seconds = parseInt(t % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timer.textContent = minutes + ":" + seconds;

            if (t === duration) title.textContent = titleName;
            if (--t < 0) {
                t = duration;
                clearInterval(interval);

                //play end exercise sound
                if(end_exercise_audio){
                    end_exercise_audio.play();
                }

                resolve();
            };
        }, 1000);
    });
}

/// this could have beed a function workout object
function updateTotal() {
    const total = document.getElementById('totalExerciseTime');
    sets = Number(form.elements.sets.value);
    work = timeToSeconds(form.elements.work.value);
    rest = timeToSeconds(form.elements.rest.value);

    const totalSec = sets * (work + rest);

    total.textContent = timeFromSeconds(totalSec);
}

/// get index of an html node
function getNodeIndex(node) {
    const parent = node.parentNode;
    return Array.prototype.indexOf.call(parent.children, node);
};

// todo save edit workout instead of adding a new one

/////// for testing
// const wo = {
//     warmup: 1,
//     cooldown: 1,
//     exercises: [
//         {
//             name: 'exercise 1',
//             sets: 1,
//             work: 1,
//             rest: 1
//         },
//         {
//             name: 'exercise 2',
//             sets: 2,
//             work: 1,
//             rest: 1
//         }
//     ]
// };
// const testBtn = document.getElementById('testBtn');
// testBtn.addEventListener('click', (e) => {
//     // playWorkout(wo);
//     // console.log(workouts, workouts.length);
//     console.log(workoutTemp, workoutTemp['exercises'].length);
// });
