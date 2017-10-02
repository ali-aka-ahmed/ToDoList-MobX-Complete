import React, {Component} from 'react';
import {inject} from 'mobx-react';
import {observer} from 'mobx-react';

// Since this is a class based component, I used MobX decorators. I accessed the appState using the Provider + inject method
// which is by far the most popular when using MobX. Remember, you can import the store directly, pass it as props, or use Provider + inject.
@inject ("appState") @observer
class Item extends Component {
    // I put separate functions here instead of just calling this.props.appState.[FUNCTION] in the event handler within the render function
    // so it's clear to the reader that there are two 'actions' that can be done by this component. Makes it easier to read.
    markIsDone = () => {
        this.props.appState.changeIsDone(this.props.id);
    };

    deleteTask = () => {
        this.props.appState.deleteTask(this.props.id);
    };

    render() {
        return (
            <div className="task">

                {/* this is a popular way of changing styling - depending on a boolean value, you can change the class name */}
                <div className={this.props.isDone ? "text completed done" : "text completed notdone"} onClick={this.markIsDone}>
                    <p>{this.props.text}</p>
                    <div className="delete-icon" onClick={this.deleteTask}>
                        X
                    </div>
                    {/* Note in the event handler onClick, I don't have to write onClick={() => this.deleteTask()}. ES6 allows me to write
                     onClick={this.deleteTask} and the compiler will understand what I mean */}
                </div>

            </div>
        )
    };
}

export default Item;