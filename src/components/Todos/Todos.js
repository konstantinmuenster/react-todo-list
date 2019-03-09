import React from 'react';

import classes from './Todos.module.css';
import Todo from './Todo/Todo';

const todos = (props) => {

    const todoItems = props.list.map(
        (listItem) => {
            return(
                <Todo 
                    key={listItem.id} 
                    title={listItem.title} 
                    removed={() => props.removeTodo(listItem.id)} 
                    ticked={() => props.tickTodo(listItem.id)} 
                    completed={listItem.completed} />
            )
        }
    );

    return(
        <ul className={classes.todoItems}>
            {todoItems}
        </ul>
    );
};

export default todos;