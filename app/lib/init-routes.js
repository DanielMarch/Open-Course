'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var user = traceur.require(__dirname + '/../routes/user.js');
  var courses = traceur.require(__dirname + '/../routes/courses.js');
  var lessons = traceur.require(__dirname + '/../routes/lessons.js');


  app.all('*', user.lookup);

  app.get('/', dbg, home.index);
  app.get('/about', dbg, home.about);
  app.get('/portal', dbg, home.portal);

  app.post('/login', dbg, user.login);

  app.all('*', dbg, user.bounce);
  app.get('/user', dbg, user.index);
  app.get('/logout', dbg, user.logout);

  app.get('/courses', dbg, courses.index);
  app.get('/courses/:courseId', dbg, courses.view);
  app.get('/user/courses', dbg, courses.user);
  app.post('/user/courses', dbg, courses.create);
  app.put('/user/courses/:courseId', dbg, courses.edit);
  app.delete('/user/courses/:courseId', dbg, courses.destroy);
  app.get('/user/courses/new', dbg, courses.new);
  app.get('/user/courses/:courseId', dbg, courses.prepEdit);
  app.get('/courses/filter/:subject', dbg, courses.filter);

  app.get('/user/courses/:courseId/lessons/new', dbg, lessons.new);

  console.log('Routes Loaded');
  fn();
}
