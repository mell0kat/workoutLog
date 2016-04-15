import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// this.props.children
	// constructor(){
	// 	super();
	// 	this.state = { 
	// 		red: 0,
	// 		green: 0,
	// 		blue: 0
	// 	}
	// 	this.update = this.update.bind(this)
	// }
	// update(e){
	// 	this.setState({ 
	// 		red: ReactDOM.findDOMNode(this.refs.red).value,
	// 		green: ReactDOM.findDOMNode(this.refs.green).value,
	// 		blue: ReactDOM.findDOMNode(this.refs.blue).value
	// 	 })
	// }
	// render(){
	// 	return (
	// 		//refs are a way to access an instance of a component
	// 		<div>
	// 			<Slider ref="red" update= {this.update} />
	// 			{this.state.red}
	// 			<br/>
	// 			<Slider ref="green" update= {this.update} />
	// 			{this.state.green}
	// 			<br/>
	// 			<Slider ref="blue" update= {this.update} />
	// 			{this.state.blue}
	// 			<br/>
	// 		</div>
	// 	)
	// 	//return React.createElement('div', null, innerHTML or children)
	// }
	// adding or removing from dom: (un)mounting
	constructor(){
		//calls the parent constructor in order to use 'this'
		super();
		this.state = { val: 0 };
		this.update = this.update.bind(this)
	}
	update() {
		this.setState({val: this.state.val + 1})
	}
	//Invoked on client and server immediately before initial rendering
	componentWillMount(){
		console.log('mounting!')
	}
	componentDidMount(){
		console.log('mounted!')
	}
	componentWillUnmount(){
		console.log('bye!')
	}
	render(){
		console.log('rendering!')
		return <button onClick={this.update}>{this.state.val}</button>
	}

}
class Wrapper extends React.Component {
	constructor(){
		super();
	}
	mount(){
		ReactDOM.render(<App />, document.getElementById('a'))
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render(){
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount!</button>
				<button onClick={this.unmount.bind(this)}>Unmount!</button>
				<button id='a'></button>
			</div>
		)
	}
}
class Slider extends React.Component {
	render(){
		return (
			<input type="range"
			min="0"
			max="255"
			onChange={this.props.update} />
		);
	}
}
App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
	txt: 'This here the default txt'
}

// const Widget = (props) => {
// 	return (
// 		<div>
// 		<input type="text"
// 		onChange={props.update} />
// 		<h1> {props.txt}</h1>
// 		</div>
// 	);
// }
ReactDOM.render(
	<Wrapper/>,
	document.getElementById('app')
);
export default Wrapper;


