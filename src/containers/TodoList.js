import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';
import Todos from '../components/Todos/Todos';

class TodoList extends Component {

    state = {
        currentInput: '',
        todos: []
    }

    onChangeHandler = (event) => {
        this.setState({
            currentInput: event.target.value
        })
    }

    onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            const updatedTodos = [...this.state.todos];
            const newTodo = {
                id: updatedTodos.length + 1,
                title: this.state.currentInput,
                completed: false
            };
            updatedTodos.push(newTodo);
            this.setState({
                todos: updatedTodos,
                currentInput: ''
            });
          }
    }

    removeTodoHandler = (id) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos.splice(id-1,1);
        this.setState({
            todos: updatedTodos
        })
    }

    tickToDoHandler = (id) => {
        const updatedTodos = [...this.state.todos];
        const todo = updatedTodos.find(todo => todo.id === id);
        todo.completed ? todo.completed = false : todo.completed = true
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        return(
            <Aux>
            <Header />
            <main>
                <InputField
                    value={this.state.currentInput}
                    onChange={this.onChangeHandler}
                    onKeyPress={this.onKeyPressHandler} />
                {this.state.todos.length > 0 ? 
                    (<Todos 
                        list={this.state.todos} 
                        removeTodo={(id) => this.removeTodoHandler(id)} 
                        tickTodo={(id) => this.tickToDoHandler(id)} />) 
                    : null}
            </main>
            </Aux>
        );
    };
};

export default TodoList;