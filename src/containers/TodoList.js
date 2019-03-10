import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';
import Todos from '../components/Todos/Todos';

class TodoList extends Component {

    state = {
        currentInput: '',
        todos: [],
        error: false
    }

    onChangeHandler = (event) => {
        this.setState({
            currentInput: event.target.value,
            error: this.state.error ? false : false
        })
    }

    onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            if (this.state.currentInput !== '') {
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
            } else {
                this.setState({error: true});
            }
          }
    }

    removeTodoHandler = (id) => {
        let updatedTodos = [...this.state.todos];
        updatedTodos.length === 1 ? updatedTodos = [] : updatedTodos.splice(id-1,1);
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
                    onKeyPress={this.onKeyPressHandler}
                    error={this.state.error} />
                {this.state.todos ? 
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