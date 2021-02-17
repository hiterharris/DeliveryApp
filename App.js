import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/state/reducers';

const store = createStore(reducers);

const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

export default App;
