const express = require('express');
var cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());

//User Model
const User = require('../../models/user');

<<<<<<< HEAD
//Request to verify user's name and password for login.
//Potential improvements include tying to login session.
router.post('/loginRequest', (req, res) => 
=======
router.post('/loginRequest', (req, res) =>
>>>>>>> b16a074998d8f68ed9b52b5f341c0a96534fdfea
{
  // user login data from post request
  let usersName = req.body.username;
  let usersPassword = req.body.password;

  // Search database for username
<<<<<<< HEAD
  User.findOne({ username: usersName }, function(err, user) 
=======
  User.find({ username: usersName }, function(err, user)
>>>>>>> b16a074998d8f68ed9b52b5f341c0a96534fdfea
  {
    if(err)
    {
      res.json({success: false, message: 'an error occured'})
      next();
    }

    User.checkPassword(usersPassword, function(errr, isMatch)
    {
      if(true == isMatch)
      {
        res.json({success: true, message: ''})
        //create and set cookie
        res.cookie("userData", {username: user.username, role: user.role});
        res.send('user data added to cookie');
        res.send(req.cookies);
      }
      else
      {
        res.json({success: false, message: 'an error occured'})
      }
    });

  });
});

<<<<<<< HEAD
//Request to change user's password given their username and current password.
router.post('/passwordChangeRequest', (req, res) => 
{
  // user login data from post request
  let usersName = req.body.username;
  let usersPassword = req.body.password;
  let usersNewPassword = req.body.newPassword;

  // Search database for username
  User.findOne({ username: usersName }, function(err, user) 
  {
    if(err)
    {
      res.json({success: false, message: 'an error occured'})
      next();
    }

    User.checkPassword(usersPassword, function(errr, isMatch)
    {
      if(true == isMatch)
      {
        //Updates user's password.
        user.password = usersNewPassword;
        user.save();
        res.json({success: true, message: ''})
      }
      else
      {
        res.json({success: false, message: 'an error occured'})
      }
    });

  });
    
});

//Request to add a new user to the database.
router.post('/newUserRequest', (req, res) =>
{
  // user info from request.
  const newUser = new User({
    username: req.body.usersName,
    password: req.body.usersPassword
  });

  // verify username is unique.
  User.findOne({ username: newUser.username }, function(err, user) 
  {
    if (err)
    {
      // add new user.
      newUser.save();
      res.json({success: true, message: 'New User Added.'});
    }
    else
    {
      res.json({success: false, message: 'User already exists.'});
    }
  })

})

module.exports = router;
=======

router.post('/newUserRequest', (req, res) => {
	let new_user = new User(req.body);

	new_user.save().then(user => res.json(user));
});

module.exports = router;
>>>>>>> b16a074998d8f68ed9b52b5f341c0a96534fdfea
