import React from 'react';
import Item from './item';
import {observer} from 'mobx-react';

const ItemList = ({appState}) => {
    // Destructuring, but within the function arguments. When props is in the function argument, you can access everything
    // given in props. When {appState} is in the function arguments, you can access everything in appState.

    let taskItems = appState.tasks.map((task) => {
        {/* Whenever you create a list, you will need to map array items into components. Whenever you do so, React requires that
         you have a key prop */}
        return (
            <Item
                text={task.text}
                isDone={task.isDone}
                key={task.key}
                id={task.key}
            />
        )
    });

    return (
            <ul className="item-list">
                {taskItems}
            </ul>
    );
};

export default observer(ItemList);
// functional component - you put observer here