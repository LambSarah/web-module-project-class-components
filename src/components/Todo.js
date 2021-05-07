import React from 'react';
import '/home/thefemaledannyglover/Documents/LambdaProjects/Unit3/web-module-project-class-components/src/components/Todo.css';

class Todo extends React.Component {
    render() {
        return (
            <div className={(this.props.completed === true) ? 'strikethrough todoItem' : 'todoItem'}>
                {this.props.task}</div >

        )
    }
}
export default Todo;