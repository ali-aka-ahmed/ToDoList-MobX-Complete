import {observable} from 'mobx';
import appState from './appState';

class textBoxState {
    @observable text = '';

    handleChange = (e) => {
        this.text = e.target.value;
    };

    handleSubmit = (e) => {
        // stops default action from form element from triggering
        e.preventDefault();
        // "require" in ES5 is equivalent to "import" in ES6. Here I'm importing a package that will generate a unique time based id.
        let uuid = require('uuid/v4');
        if (this.text === '') {
            console.error('error');
            return
        }
        let new_task = {
            text: this.text,
            isDone: false,
            key: uuid()
        };

        this.text = '';
        appState.addTask(new_task);
    };

}

export default new textBoxState();