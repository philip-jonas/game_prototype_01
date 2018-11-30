import * as React from 'react';
import './App.css';
import { initStores } from './stores';

const stores = initStores();

class App extends React.Component {

  public componentDidMount() {
    stores.tileLogicStore.layoutRooms();
    stores.worldLogicStore.initWorldLogic();
  }

  public render() {
    return (
      <div>hi</div>
    );
  }
}

export default App;
