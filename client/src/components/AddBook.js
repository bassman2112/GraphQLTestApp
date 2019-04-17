import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';


class AddBook extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorid: '',
            formErrors: {name: '', genre: '', authorid:''},
            nameValid: false,
            genreValid: false,
            authoridValid: false,
            formValid: false
        }
    }

    
    
    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        //console.log(this.props)
        if (data.loading){
            return(<option disabled>Loading Authors... </option>);
        } else {
            return data.authors.map(author => {
                let id = author.id
                return(<option key = {id} value={id}> { author.name } </option>);
            })
        }
    }

    submitForm(e){
        e.preventDefault();
        //if(this.state.name && this.state.genre && this.state.authorid !== )
        
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorid: this.state.authorid
            }, 
            refetchQueries: [{query: getBooksQuery}]
        });
    }

  render() {
    return (
        <form id="add-book" onSubmit={ this.submitForm.bind(this) }>
            <div className="title">
                <h3>Add a New Book</h3>
            </div>

    

            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={ (e) => this.setState({ name: e.target.value })} required/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } required/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select onChange={ (e) => this.setState({ authorid: e.target.value }) } required>
                    <option>Select author</option>
                    {this.displayAuthors() }
                </select>
            </div>

            <button>+</button>
           {/*<div>
                <p>State is: <br/>{JSON.stringify(this.state, null, 2)}</p> 
           </div> */}
        </form>

    );
  }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery"}),
    graphql(addBookMutation, { name: "addBookMutation" })
    )(AddBook);