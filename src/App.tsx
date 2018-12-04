import './App.css';
import * as React from 'react';
import { World } from './Components/World';
import { Provider as StoreProvider } from 'mobx-react';
import { initStores } from './stores';

const stores = initStores();

class App extends React.Component {

  public render() {
    return (
      <StoreProvider
        worldStore={stores.worldStore}
        plotStore={stores.plotStore}
      >
        <World />
      </StoreProvider>
    );
  }
}

export default App;
