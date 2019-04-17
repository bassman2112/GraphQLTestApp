import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {

    displayBookDetails(){
        const { book } = this.props.data;
        if(book){
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p><b>Genre: </b><i>{book.genre}</i></p>
                    <p><b>Author: </b><i>{book.author.name}</i></p>
                    <p><b>All books by this author: </b></p>
                    <ul className="other-books">
                        {book.author.books.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div id="book-details">
                    <h2>No book selected... (Click one!)</h2>
                </div>
            )
        }
    };


  render() {
    
    console.log(this.props);
    
    return (
      <div id="book-details">
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookid
            }
        }
    }
})(BookDetails);