import React, { Component } from 'react';
import { 
  ApolloClient,
  HttpLink,
  InMemoryCache
} from "apollo-boost";
import { ApolloProvider } from 'react-apollo';



// Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// Apollo client setup
const client = new ApolloClient({ 
  link: new HttpLink({ 
    uri: 'http://localhost:8080/graphql' 
  }), 
  cache: new InMemoryCache(), 
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Alex's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
