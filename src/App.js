import React, { Component } from 'react';
import './App.css';
import ItemList from './components/itemList';
import AddItem from './components/addItem';
import {observer} from 'mobx-react';
import textBoxState from './stores/textBoxState';
import appState from './stores/appState';
import {Provider} from 'mobx-react';

@observer
class App extends Component {

  render() {
    return (
        // Wrap the provider around the app so you can access the store from anywhere
        // Note that I am passing textBoxState as a prop to the AddItem component. I could have added it as a prop to the
        // Provider and accessed it using 'inject'. I am also passing appState as a prop to ItemList component, to show that you
        // can pass stores as props, although it is not super super common (makes sense to just import it or put it in the provider
        <Provider appState={appState}>
          <div className="App">
            <AddItem textBoxState={textBoxState} />
            <ItemList appState={appState} />
          </div>
        </Provider>
    );
  };
}

export default App;
