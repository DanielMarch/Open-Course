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

  app.all('*', dbg, user.lookup);

  app.get('/', dbg, home.index);
  app.get('/about', dbg, home.about);
  app.get('/portal', dbg, home.portal);

  app.post('/login', dbg, user.login);
  app.get('/logout', dbg, user.logout);
  app.get('/user', dbg, user.index);

  app.get('/courses', dbg, courses.index);
  app.get('/user/courses', dbg, courses.user);
  app.get('/user/courses/new', dbg, courses.new);

  console.log('Routes Loaded');
  fn();
}
