import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
