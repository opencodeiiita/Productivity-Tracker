import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

const reminderAdd = (action) => ({
    text: action.text,
    id: Math.random(),
    done: false,
    dueDate: action.dueDate
});

const removeByID = (state = [], id) => {
    const reminders = state.filter(r => r.id !== id);
    return reminders;
};

const Reminders = (state = [], action) => {
    let reminders = null;
    const savedReminders = localStorage.getItem('remindlist');
    const currentState = savedReminders ? JSON.parse(savedReminders) : [];
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...currentState, reminderAdd(action)];
            reminders = reminders.sort((r1, r2) => r1.dueDate > r2.dueDate);
            localStorage.setItem('remindlist', JSON.stringify(reminders));
            return reminders;
        case DELETE_REMINDER:
            reminders = removeByID(currentState, action.id);
            reminders = reminders.sort((r1, r2) => r1.dueDate > r2.dueDate);
            localStorage.setItem('remindlist', JSON.stringify(reminders));
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            localStorage.setItem('remindlist', JSON.stringify(reminders));
            return reminders;
        default:
            return currentState;
    }
};

export default Reminders;
