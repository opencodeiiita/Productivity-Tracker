import React from 'react';
import moment from 'moment-timezone';

class RemindersList extends React.Component {
    componentWillMount () {
        clearInterval(this.interval);
    }
    componentDidMount () {
        this.interval = setInterval(
            this.forceUpdate.bind(this),
            parseInt(this.props.updateInterval, 10) || 100
        );
    }

    render () {
        const { reminders, deleteReminder } = this.props;
        return (
            <ul className="list-group">
                {
                    reminders.map((reminder) => (
                        <li key={reminder.id} className="list-group-item clearfix">
                            <span className="list-item">{reminder.text}</span>
                            <button
                                className="list-item btn btn-danger btn-xs pull-right"
                                onClick={() => deleteReminder(reminder.id)}
                            >
                                &#x2715;
                            </button>
                            <div className="list-item time">
                                {
                                    moment(new Date(reminder.dueDate))
                                    // .locale('ru')
                                    .fromNow()
                                }
                            </div>
                        </li>))
                }
            </ul>);
    }
}

RemindersList.propTypes = {
    reminders: React.PropTypes.array.isRequired,
    deleteReminder: React.PropTypes.func.isRequired,
    updateInterval: React.PropTypes.string,
};
export default RemindersList;
