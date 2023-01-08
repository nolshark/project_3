// imports
const express = require('express');
const connection = require('./config/connection.js');
const routes = require('./routes');
const path = require('path');

// apollo and auth imports
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth.js');
const { typeDefs, resolvers } = require('./schemas');

// setup express middleware
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// get current activity
const cwd = process.cwd();
const activity = cwd.includes('project_3')
  ? cwd.split('/project_3/')
  : cwd;

// mount express middleware functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// open server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} listening at: http://localhost:${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};
startApolloServer(typeDefs, resolvers);
