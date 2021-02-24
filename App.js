import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/state/reducers';
import { ApolloProvider } from '@apollo/client';
import client from './src/apollo/client';

const store = createStore(reducers);

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <Router />
            </Provider>
        </ApolloProvider>
    )
}

export default App;
