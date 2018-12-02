import * as React from 'react';
import './App.css';
import { World } from './Components/World';
import { initStores } from './stores';

const stores = initStores();

class App extends React.Component {

  public render() {
    return (
      <World />
    );
  }
}

export default App;
