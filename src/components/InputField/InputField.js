import React from 'react';

import classes from './InputField.module.css';

const inputField = (props) => (
    <input 
        id="todoInput"
        className={classes.todoInput}
        type="text"
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        placeholder="What to do next?" />
);

export default inputField;