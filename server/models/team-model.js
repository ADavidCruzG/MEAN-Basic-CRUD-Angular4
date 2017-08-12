/**
 * Created by David Cruz on 07/08/2017.
 */
'use strict';

const mongoose = require('mongoose'), Schema = mongoose.Schema;

let TeamSchema = new Schema(
    {
        name: {type: String, required: true},
        foundationYear: {type: Number, required: true},
        nickname: {type: String, required: true},
        stadiumName: {type: String, required: true}
    }
);

module.exports = mongoose.model('Team', TeamSchema);