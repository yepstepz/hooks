'use strict';

const express = require('express');
const axios = require('axios')

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

app.post('/circleci/blog/rebuild', (req, res) => {
    if (req && req.query && req.query.token) {

        axios.post(
            'https://circleci.com/api/v2/project/github/yepstepz/blog/pipeline',
            { branch: 'master'},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Circle-Token': req.query.token,
                }
            }
            )
            .then(function (response) {
                console.log({response});
            })
            .catch(function (error) {
                console.log({error});
            });
    }

    res.send('{ "status": "success"}');
});

app.get('/', (req, res) => {
    res.send('You and me, time and space');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
