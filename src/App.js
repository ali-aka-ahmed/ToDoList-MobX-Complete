import React, { Component } from 'react';
import logo from './logo.svg';
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
