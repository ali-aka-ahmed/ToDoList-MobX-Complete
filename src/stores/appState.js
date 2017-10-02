import { observable } from 'mobx'

class taskState {

    // NOTE this is not the best way to hold your data. See the MobX docs. But for sake of time I will implement this.
    @observable tasks = [];
    // Whenever we update or add one task, since the entire data structure is observable, all observers looking at 'tasks'
    // will re-render. This is not efficient. Even lookup isn't (see the methods below using for loops). Instead, we want to
    // have this variable NOT be an observable, but instead hold observable 'mini-stores' or Task classes that are themselves observables,
    // with variables 'isDone', 'text', and 'key', all (except for 'key') observable values. When we create a new Task we should initialize
    // an instance of a class Task, which has internal observables. This way only a single task will update when it is updated.

    addTask = (dict) => {
        let new_tasks = this.tasks;
        new_tasks.push(dict);
        this.tasks = new_tasks;
    };

    changeIsDone = (key)  => {
        for (let i=0; i < this.tasks.length; i++) { // inefficient. Suggests you should change data model
            if (this.tasks[i].key === key) {
                this.tasks[i].isDone = !this.tasks[i].isDone;
                break;
            }
        }
    };

    deleteTask = (key) => {
        for (let i=0; i < this.tasks.length; i++) {
            if (this.tasks[i].key === key) {
                this.tasks.splice(i, 1);
                break;
            }
        }
    }
}

let appState =  new taskState();

export default appState;