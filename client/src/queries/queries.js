import gql from 'graphql-tag';

const getBooksQuery = gql`
    {
        books {
            name
            genre
            id
            author {
                name
            }
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation ($name: String!, $genre: String!, $authorid: ID!) {
        addBook(name: $name, genre: $genre, authorid: $authorid){
            name
            id
        }

    }


`

const getBookQuery = gql`
    query($id: ID){
        book(id:$id){
            id
            name
            genre
            author {
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }    

    

`


export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };