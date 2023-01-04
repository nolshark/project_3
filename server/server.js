// imports
const express = require('express');
const db = require('./config/connection.js');
const routes = require('./routes');

// setup express middleware
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(routes);

// open server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`listening at http://localhost:${PORT}$`);
    });
});