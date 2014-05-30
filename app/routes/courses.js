'use strict';

exports.index = (req, res)=>{
  var userId = req.session.userId;
  if(userId){
    res.render('courses/index', {title: 'Available Courses'});
  }
  else{
    res.redirect('/portal');
  }
};

exports.new = (req, res)=>{
  var userId = req.session.userId;
  if(userId){
    res.render('courses/new', {title:'Create a New Course'});
  }
  else{
    res.redirect('/portal');
  }
};

exports.user = (req, res)=>{
  var userId = req.session.userId;
  if(userId){
    res.render('user/courses', {title:'My Courses'});
  }
  else{
    res.redirect('/portal');
  }
};
