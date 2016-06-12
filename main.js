import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutListAndForm  from './App'
// ReactDOM.render(<App />, document.getElementById('content'))


ReactDOM.render(React.createElement(WorkoutListAndForm, { url: "api/workouts", getExercisesUrl: "api/exercises" }), document.getElementById('content'));