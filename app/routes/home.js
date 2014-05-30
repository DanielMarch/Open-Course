'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Open Course Learning'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'About Open Course'});
};

exports.portal = (req, res)=>{
  res.render('home/portal', {title: 'User Portal'});
};
