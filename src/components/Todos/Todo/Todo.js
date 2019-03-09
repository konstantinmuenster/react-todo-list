import React from 'react';

import { ReactComponent as CircleBlank } from '../../../assets/icons/circle-blank.svg';
import { ReactComponent as CircleDone } from '../../../assets/icons/circle-done.svg';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';

import classes from './Todo.module.css';

const todo = (props) => {
    
    let attachedClasses = [classes.todoItem];
    if (props.completed) {
        attachedClasses.push(classes.completed);
    }
    
    return(
        <li className={attachedClasses.join(' ')}>
            <button className={classes.doneBtn} onClick={props.ticked}>
                {props.completed ? <CircleDone className={classes.iconCircleDone} /> : <CircleBlank className={classes.iconCircleBlank} />}
            </button>
            {props.title} 
            <button className={classes.removeBtn} onClick={props.removed}>
                <Close className={classes.iconClose} />
            </button>
        </li>
    );
}

export default todo;