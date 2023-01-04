// imports
const express = require('express');
const connection = require('./config/connection.js');
const routes = require('./routes');

// setup express middleware
const PORT = process.env.PORT || 3001;
const app = express();

const cwd = process.cwd();
const activity = cwd.includes('project_3')
  ? cwd.split('/project_3/')
  : cwd;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(routes);

// open server
connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} listening at: http://localhost:${PORT}!`);
    });
});