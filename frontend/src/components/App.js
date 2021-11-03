import React, { Component } from "react";
import moment from "moment-timezone";
import { connect } from "react-redux";
import RemindersList from "./Reminders";
import { addReminder, deleteReminder, clearReminders } from "../actions";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: true,
			time: new Date().toLocaleString(),
		};
		this.addCheckActive = this.addCheckActive.bind(this);
	}

	tick(reminders) {
		this.setState({
			time: new Date().toLocaleString(),
		});
		let notificationPing = new Audio("/notification.mp3");
		reminders.forEach(reminder => {
			console.log(reminder.dueDate);
			console.log(this.state.time);
			if (reminder.dueDate <= this.state.time) {
				alert("Time's UP for " + reminder + "!!");
				notificationPing.play();
				console.log("times up");
			}
		});
	}
	componentDidMount() {
		this.taskInput.focus();
		this.intervalID = setInterval(() => this.tick(this.props.reminders), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	addReminder(e) {
		this.props.addReminder(this.taskInput.value, moment(this.timeInput.value).toDate());
		if (e.type === "submit") e.preventDefault();
		this.taskInput.value = "";
		this.setState({ disabled: true });
	}

	deleteReminder(id) {
		this.props.deleteReminder(id);
	}

	addCheckActive() {
		const newValue = this.taskInput.value;
		if (newValue > "" && this.state.disabled) this.setState({ disabled: false });
		else if (!newValue && !this.state.disabled) this.setState({ disabled: true });
	}

	notification(reminder) {
		// var d = new Date();
		// d.getHours();
		// d.getMinutes();
		// d.getSeconds();
		let notificationPing = new Audio("/notification.mp3");
		console.log("outside if");
		if (reminder.dueDate === this.time) {
			alert("Time's UP for " + reminder + "!!");
			notificationPing.play();
		}
	}

	renderReminders() {
		const { reminders } = this.props;

		return (
			<ul className="list-group">
				{reminders.map(reminder => (
					<li key={reminder.id} className="list-group-item clearfix">
						<span className="list-item">{reminder.text}</span>
						<button
							className="list-item btn btn-danger btn-xs pull-right"
							onClick={() => this.deleteReminder(reminder.id)}
						>
							&#x2715;
						</button>
						<div className="list-item time">{moment(new Date(reminder.dueDate)).locale("ru").fromNow()}</div>
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">
					<h2>Reminder Pro</h2>
				</div>
				<div className="form-inline reminder-form">
					<div className="form-group">
						<input
							className="form-control"
							placeholder="I have to…"
							ref={c => {
								this.taskInput = c;
							}}
							onChange={this.addCheckActive}
						/>
						<input
							className="form-control"
							type="datetime-local"
							defaultValue={moment(Date.now()).format("YYYY-MM-DDTHH:mm")}
							ref={c => {
								this.timeInput = c;
							}}
						/>
						<button
							className="btn btn-success"
							type="button"
							onClick={e => this.addReminder(e)}
							disabled={this.state.disabled}
						>
							Add this
						</button>
					</div>
					<RemindersList
						reminders={this.props.reminders}
						deleteReminder={this.props.deleteReminder}
						updateInterval="1000"
					/>
					{this.props.reminders.length > 1 && (
						<button className="btn btn-danger" type="button" onClick={() => this.props.clearReminders()}>
							Clear all
						</button>
					)}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	addReminder: React.PropTypes.func.isRequired,
	deleteReminder: React.PropTypes.func.isRequired,
	clearReminders: React.PropTypes.func.isRequired,
	reminders: React.PropTypes.array.isRequired,
};

export default connect(
	state => ({
		reminders: state,
	}),
	{ addReminder, deleteReminder, clearReminders }
)(App);
