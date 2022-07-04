// packages
const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");

// files
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

// listener
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
