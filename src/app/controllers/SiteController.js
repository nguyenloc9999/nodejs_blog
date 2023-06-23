const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
       /*  Course.find({}) .then(courses => {res.json(courses)}) 
        .catch(err => { next(err); res.status(400).json({error: "ERROR!!!"})}) */

        Course.find({}) 
        .then(courses => {
            res.render('home', { 
                courses : mutipleMongooseToObject(courses)
            });
        })
        .catch(next);

    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
