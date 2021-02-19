import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/state/reducers';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  });

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
