const User = require('./../models/userModel');
const axios = require('axios');

exports.home = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};

exports.getCourse = async (req, res) => {
  res.status(200).render('courses', {
    title: `Get Course`
  });
};
//loan
exports.getLoan = async (req, res) => {
  const query = await axios.get('http://localhost:3000/api/v1/loans')
  console.log(query.data.loans)
  res.status(200).render('loanlists', {
    title: `Get loanlists`,
    "loans": query.data.loans
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newCourse', {
    title: `Create New Course`
  });
};

exports.getSignInForm = async (req, res) => {
  res.status(200).render('signup', {
    title: 'Sign in New User'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

// exports.getLoginUser = (req, res) => {
//   const {email, password} = req.body;
//   res.status(200).render('login', {
//     title: 'You login in successfully'
//   });
// };

exports.getAll

