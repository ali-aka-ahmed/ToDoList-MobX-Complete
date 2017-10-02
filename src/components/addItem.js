import React from 'react';
import { observer } from 'mobx-react';

const AddItem = (props) => {
        // Here I used a fancy bit of ES6 syntax called 'destructuring.' Instead of typing props.textBoxState everytime,
        // I 'destructured' handleSubmit, handleChange and text from props.textBoxState and used those arguments directly.
        const { handleSubmit, handleChange, text } = props.textBoxState;

        return (
            <div className="add-items">

                <div className="fun-text">
                    <p>We are creators, thinkers, listeners, and innovators.</p>
                    <p>But above all, <i className="doers">doers</i></p>
                </div>

            {/* I used a form element here - there are better ways to do textboxes. The most popular is to import a third party
            custom component which has it's own event handlers. Look at libraries like Antd and Material UI. */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className="add-box" value={text} onChange={(e) => handleChange(e)}/>
                <button className="submit-button" type="submit">+</button>
            </form>

            </div>
        )
};

export default observer(AddItem);
// in functional (stateless) components, you add the MobX observer here, when exporting the function. You cannot use decorators.