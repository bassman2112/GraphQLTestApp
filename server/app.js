const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect("mongodb+srv://alex:Ir8F58OzhogzYQfq@igapp-ajwvz.mongodb.net/test?retryWrites=true");
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(8080, () => {
    console.log("Now listening for requests on port 8080");
});