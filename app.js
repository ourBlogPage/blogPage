const express = require('express');
const app = express();
const ejs = require('ejs');
const cors = require('cors');
const path = require('path');
const env = require('./env');


app.use(cors());
app.use(express.urlencoded({
    'extended': 'true'
}));
app.use(express.json());

const router = require('./routers/router')

app.listen(env.PORT, (err) => {
    if (!err) console.log('App is running.');
    else if (err) console.log('App is not running.');
});

app.use('/', router);