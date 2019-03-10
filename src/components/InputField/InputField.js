import React from 'react';

import classes from './InputField.module.css';

const inputField = (props) => {
    let attachedClasses = [classes.todoInput];
    let placeholderText = "What to do next?";
    if (props.error) {
        attachedClasses.push(classes.errorInput);
        placeholderText = "Add something...";
    }
    return (
        <input 
        id="todoInput"
        className={attachedClasses.join(' ')}
        type="text"
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        placeholder={placeholderText} />
    );
};

export default inputField;