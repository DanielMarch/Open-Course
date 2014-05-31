'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');

exports.new = (req,res)=>{
  Course.getByCourseId(req.params.courseId, course=>{
    res.render('lessons/new', {course: course, title:'Create Lesson'});
  });
};
