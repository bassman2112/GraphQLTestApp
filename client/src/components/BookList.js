import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components 
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }
    displayBooks(){
        let data = this.props.data
        if(data.loading){
            return( <div> Loading Books... </div>);
        } else {
          console.log(`This is data books: ${data.books}`);
            return data.books.map(book => {
                return(
                    <li key = {book.id} onClick={(e) => {this.setState({selected: book.id})}}> { book.name }</li>
                );
            })
        }
    }
  render() {
    return (
      <div>
        <ul id="book-list">
            { this.displayBooks() }
        </ul>
        <BookDetails bookid= {this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);