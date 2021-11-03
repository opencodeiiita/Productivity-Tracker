import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => ({
    type: ADD_REMINDER,
    text,
    dueDate
});

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };
    return action;
};

export const clearReminders = () => ({
    type: CLEAR_REMINDERS
});
