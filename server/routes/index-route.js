/**
 * Created by David Cruz on 07/08/2017.
 */
'use strict';

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.sendFile('index.html', {
        root: '../client/dist'
    });
});

module.exports = router;