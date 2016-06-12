import React from 'react';
import ReactDOM from 'react-dom';

//  let Mixin = InnerComponent => class extends React.Component {
//  		constructor(){
// 		super();
// 		this.update = this.update.bind(this);
// 		this.state = {val:0}
// 	}
// 	update(){
// 		this.setState({val: this.state.val + 1})
// 	}
// 	componentWillMount(){
// 		console.log('will mount')
// 	}
// 	render(){
// 		return <InnerComponent
// 		update={this.update}
// 		{...this.state}
// 		{...this.props}/>
// 	}
// 	componentDidMount(){
// 		console.log('mounted!')
// 	}
//  }

// const Button = (props) => <button 
// 							onClick={props.update}>
// 							{props.txt} - {props.val}
// 							</button>

// let ButtonMixed = Mixin(Button)

// class App extends React.Component {

// 	render(){
// 		return (
// 			<div>
// 			<ButtonMixed txt="Button"/>
// 			</div>
// 		);
// 	}

// // 	// this.props.children
// // 	// constructor(){
// // 	// 	super();
// // 	// 	this.state = { 
// // 	// 		red: 0,
// // 	// 		green: 0,
// // 	// 		blue: 0
// // 	// 	}
// // 	// 	this.update = this.update.bind(this)
// // 	// }
// // 	// update(e){
// // 	// 	this.setState({ 
// // 	// 		red: ReactDOM.findDOMNode(this.refs.red).value,
// // 	// 		green: ReactDOM.findDOMNode(this.refs.green).value,
// // 	// 		blue: ReactDOM.findDOMNode(this.refs.blue).value
// // 	// 	 })
// // 	// }
// // 	// render(){
// // 	// 	return (
// // 	// 		//refs are a way to access an instance of a component
// // 	// 		<div>
// // 	// 			<Slider ref="red" update= {this.update} />
// // 	// 			{this.state.red}
// // 	// 			<br/>
// // 	// 			<Slider ref="green" update= {this.update} />
// // 	// 			{this.state.green}
// // 	// 			<br/>
// // 	// 			<Slider ref="blue" update= {this.update} />
// // 	// 			{this.state.blue}
// // 	// 			<br/>
// // 	// 		</div>
// // 	// 	)
// // 	// 	//return React.createElement('div', null, innerHTML or children)
// // 	// }
// // 	// adding or removing from dom: (un)mounting
// // 	constructor(){
// // 		//calls the parent constructor in order to use 'this'
// // 		super();
// // 		this.state = { val: 0 };
// // 		this.update = this.update.bind(this)
// // 	}
// // 	update() {
// // 		this.setState({val: this.state.val + 1})
// // 	}
// // 	//Invoked on client and server immediately before initial rendering
// // 	componentWillMount(){
// // 		console.log('mounting!')
// // 		this.setState({m:2})
// // 	}
// // 	componentDidMount(){
// // 		this.inc = setInterval(this.update, 500);
// // 		console.log('mounted!')
// // 		console.log(ReactDOM.findDOMNode(this))
// // 	}
// // 	componentWillUnmount(){
// // 		console.log('bye!')
// // 	}
// // 	render(){
// // 		console.log('rendering!')
// // 		return <button onClick={this.update}>{this.state.val * this.state.m}</button>
// // 	}

// // }
// // class Wrapper extends React.Component {
// // 	constructor(){
// // 		super();
// // 	}
// // 	mount(){
// // 		ReactDOM.render(<App />, document.getElementById('a'))
// // 	}
// // 	unmount(){
// // 		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
// // 	}
// // 	render(){
// // 		return (
// // 			<div>
// // 				<button onClick={this.mount.bind(this)}>Mount!</button>
// // 				<button onClick={this.unmount.bind(this)}>Unmount!</button>
// // 				<button id='a'></button>
// // 			</div>
// // 		)
// // 	}
// // }
// // class Slider extends React.Component {
// // 	render(){
// // 		return (
// // 			<input type="range"
// // 			min="0"
// // 			max="255"
// // 			onChange={this.props.update} />
// // 		);
// // 	}
// // }
// // App.propTypes = {
// // 	txt: React.PropTypes.string,
// // 	cat: React.PropTypes.number.isRequired
// // };

// // App.defaultProps = {
// // 	txt: 'This here the default txt'
// // }

// // // const Widget = (props) => {
// // // 	return (
// // // 		<div>
// // // 		<input type="text"
// // // 		onChange={props.update} />
// // // 		<h1> {props.txt}</h1>
// // // 		</div>
// // // 	);
// // // }
// // ReactDOM.render(
// // 	<App/>,
// // 	document.getElementById('app')
// // );

// }


var PerformanceForm = React.createClass({ displayName: "PerformanceForm",
	getInitialState: function getInitialState() {
		return { units: ['reps', 'seconds', 'minutes', 'rounds'] };
	},
	handleChange: function handleChange(e, factor) {
		this.setState({ factor: e.target.value });
		console.log('this is the state LOOOK HERERERERERE:', this.state);
	},
	render: function render() {
		var options = this.state.units.map(function (unit) {
			return React.createElement("option", { value: unit }, unit);
		});
		return React.createElement("div", null, React.createElement("h3", null, "Performance"), React.createElement("form", { className: "performanceForm", onSubmit: this.handleSubmit }, React.createElement("label", null, "Rounds:"), React.createElement("input", { type: "number",
			value: this.state.number,
			onChange: this.handleChange.bind(this, 'number') }), React.createElement("label", null, "Extra Reps:"), React.createElement("input", { type: "number",
			value: this.state.reps,
			onChange: this.handleChange.bind(this, 'reps') }), React.createElement("label", null, "Time:"), React.createElement("input", { type: "number",
			value: this.state.time,
			onChange: this.handleChange.bind(this, 'time') }), React.createElement("label", null, "Rounds:"), React.createElement("input", { type: "units",
			value: this.state.rounds,
			onChange: this.handleChange.bind(this, 'units') }), React.createElement("input", { type: "submit", value: "Post" }), React.createElement("select", null, options)));
	}
});

// let performanceSchema = new Schema({
//     rounds: Number,
//     extraReps: Number,
//     time: Number,
//     units: {
//       type: String,
//       enum: ['reps', 'seconds', 'mins']
//     },
//     weights:[Number]
// });

var Workout = React.createClass({ displayName: "Workout",
	//has this.props.boxes
	render: function render() {
		console.log('this.props in Workout', this.props);
		var boxes = this.props.boxes.map(function (box) {
			console.log("this is a box:", box);
			return React.createElement(WorkoutBox, { sections: box.sections, instructions: box.instructions, performance: box.performance });
		});
		return React.createElement("div", { className: "workout" }, React.createElement("h2", { className: "workoutAuthor" }, "Author: ", this.props.author), React.createElement("h2", { className: "workoutDate" }, "Date: ", this.props.date), boxes);
	}

});

var WorkoutList = React.createClass({ displayName: "WorkoutList",
	//has this.props.data

	render: function render() {
		console.log('this.props.data in WorkoutList', this.props.data);
		var workoutNodes = this.props.data.map(function (workout) {
			return React.createElement(Workout, { author: workout.author, date: workout.date, key: workout.id, boxes: workout.boxes }, workout.text);
		});
		return React.createElement("div", { className: "workoutList" }, workoutNodes);
	}
});

var ExerciseForm = React.createClass({ displayName: "ExerciseForm",
	getInitialState: function getInitialState() {
		return { exerciseName: '' };
	},
	handleChange: function handleChange(e) {

		this.setState({ exerciseName: e.target.value });
	},
	handleSubmit: function handleSubmit(e) {
		e.preventDefault(); // Is this what prevents page refresh?
		var exerciseName = this.state.exerciseName.trim();
		if (!exerciseName) {
			return;
		};
		this.props.onExerciseSubmit({ name: exerciseName });
		this.setState({ exerciseName: '' });
	},
	// These <input> elements with a value set are called controlled components
	render: function render() {
		return React.createElement("form", { className: "exerciseForm", onSubmit: this.handleSubmit }, React.createElement("label", null, "Name of exercise:"), React.createElement("input", { type: "text",
			value: this.state.exerciseName,
			onChange: this.handleChange }), React.createElement("input", { type: "submit", value: "Post" }));
	}
});

var WorkoutForm = React.createClass({ displayName: "WorkoutForm",

	loadExercisesFromServer: function loadExercisesFromServer() {
		console.log('about to load exercises with this url:', this.props.getExercisesUrl);

		$.ajax({
			url: this.props.getExercisesUrl,
			dataType: 'json',
			cache: false,
			method: 'GET',
			success: function (data) {
				console.log('in success?', data);
				this.setState({ exercises: data });
				console.log('state after getting exercise:', this.state);
			}.bind(this),
			error: function (xhr, status, err) {
				console.log('could not find exercises!');
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	componentDidMount: function componentDidMount() {
		console.log('workout form did mount');
		this.loadExercisesFromServer();
	},
	getInitialState: function getInitialState() {
		return { showAddWorkoutForm: false, exercises: [] };
	},
	onClick: function onClick() {
		this.setState({ showAddWorkoutForm: true });
	},
	render: function render() {
		var options = this.state.exercises.map(function (exercise) {
			return React.createElement("option", { value: exercise.name }, exercise.name);
		});
		return React.createElement("div", null, React.createElement("button", { onClick: this.onClick }), this.state.showAddWorkoutForm ? React.createElement("form", { className: "workoutForm" }, "Author:", React.createElement("input", { type: "text", placeholder: "author" }), "Motto:", React.createElement("input", { type: "text", placeholder: "text" }), "Date:", React.createElement("input", { type: "date", placeholder: "date" }), React.createElement("select", null, options), "// ", React.createElement("p", null, "Box"), "// Num:", React.createElement("input", { type: "text", placeholder: "" }), "// Units:", React.createElement("input", { type: "text", placeholder: "" }), "// Exercise:", React.createElement("input", { type: "text", placeholder: "" }), "// Weight:", React.createElement("input", { type: "number", placeholder: "" }), "// ", React.createElement("input", { type: "submit", value: "Post" }), React.createElement(PerformanceForm, null)) : null);
	}
});

var WorkoutListAndForm = React.createClass({ displayName: "WorkoutListAndForm",
	//has this.props.data
	loadWorkoutsFromServer: function loadWorkoutsFromServer() {
		console.log('about to mount');
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function (data) {
				console.log('in success?', data);
				this.setState({ data: data });
			}.bind(this),
			error: function (xhr, status, err) {
				console.log('could not find workouts!');
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function getInitialState() {
		return { data: [] };
	},
	componentDidMount: function componentDidMount() {
		this.loadWorkoutsFromServer();
	},
	handleExerciseSubmit: function handleExerciseSubmit(exercise) {
		console.log('submitting new exercise..not sure what else to do yet');
		$.ajax({
			url: 'api/exercises',
			method: 'POST',
			data: exercise,
			dataType: 'json',
			success: function (data) {
				console.log('in successful exercise post?', data);
				this.setState({ data: data });
			}.bind(this),
			error: function (xhr, status, err) {
				console.log('cannot submit new exercise');
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function render() {
		console.log('this.props.data in WorkoutListAndForm', this.props);
		return(
			//Same as React.createElement('div')
			React.createElement("div", { className: "workoutListAndForm" }, React.createElement("h1", null, "Workouts"), React.createElement(WorkoutList, { data: this.state.data }), React.createElement(WorkoutForm, { getExercisesUrl: this.props.getExercisesUrl }), React.createElement(ExerciseForm, { onExerciseSubmit: this.handleExerciseSubmit }))
		);
	}
});

//sections={box.sections} instructions={box.instructions} performance={box.performance}
var WorkoutBox = React.createClass({ displayName: "WorkoutBox",

	render: function render() {
		console.log('this.props in WorkoutBox', this.props);
		var workoutSections = this.props.sections.map(function (section) {
			return React.createElement("div", null, React.createElement("span", null, section.num, " "), React.createElement("span", null, section.units, " "), React.createElement("span", null, section.exercise), React.createElement("span", null, section.modification));
		});

		var performances = this.props.performance.map(function (performance) {
			return React.createElement("div", null, React.createElement("span", null, performance.rounds), React.createElement("span", null, performance.extraReps), React.createElement("span", null, performance.time), React.createElement("span", null, performance.units), React.createElement("span", null, performance.weights));
		});
		return React.createElement("div", { className: "workoutBox" }, React.createElement("h2", null, this.props.instructions), workoutSections, performances);
	}
});

// React.render(React.createElement(WorkoutListAndForm, { url: "api/workouts", getExercisesUrl: "api/exercises" }), document.getElementById('content'));

// Native HTML elements start with lowercase, while custom React class names begin with uppercase letter
// ReactDOM should be called last


export default WorkoutListAndForm;


