/**
 * Created by David Cruz on 07/08/2017.
 */
'use strict';

let express = require('express');
let router = express.Router();
let teamModel = require('../models/team-model');

/* CREATE team. */
router.post('/', (req, res, next) => {

    let teamToCreate = req.body;

    teamModel.create(teamToCreate, (err, teamCreated) => {
        if (err) {
            return next(err);
        }
        res.json(teamCreated);
    });
});

/* GET all teams. */
router.get('/', (req, res, next) => {
    teamModel.find((err, users) => {
        if (err) {
            return next(err);
        }
        res.json(users);
    });
});

/* GET team by id. */
router.get('/:id', (req, res, next) => {
    teamModel.findById(req.params.id, (err, team) => {
        if (err) {
            return next(err);
        }
        res.json(team);
    });
});

/* UPDATE team. */
router.put('/:id', (req, res, next) => {
    teamModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTeam) => {
        if (err) {
            return next(err);
        }
        res.json(updatedTeam);
    });
});

/* DELETE team. */
router.delete('/:id', (req, res, next) => {
    teamModel.findByIdAndRemove(req.params.id, (err, dbResponse) => {
        if (err) {
            return next(err);
        }
        res.json(dbResponse);
    });
});

module.exports = router;