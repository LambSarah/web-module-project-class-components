import React from 'react';
import '/home/thefemaledannyglover/Documents/LambdaProjects/Unit3/web-module-project-class-components/src/components/Todo.css';

class Todo extends React.Component {
    state = { completed: false };
    onClick = () => {
        this.setState({ completed: true });
    }
    render() {
        return (
            <button key={Date.now()} onClick={this.props.handleToggleCompleted} >
                { this.props.task}
            </button >

        )
    }
}
export default Todo;