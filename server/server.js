// imports
const express = require('express');
const connection = require('./config/connection.js');
const routes = require('./routes');
const path = require('path');

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// open server
connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} listening at: http://localhost:${PORT}!`);
    });
});