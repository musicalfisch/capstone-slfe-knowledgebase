const express = require('express');
const router = express.Router();

//User Model
const User = require('../../models/user');

// @route  GET api/domains
// @desc   Get all domains
// @access Public
router.get('/', (req, res) => {
  Domain.find({})
    .then(domains => res.json(domains))
});

router.post('/', (req, res) => {
	let new_user = new User(req.body);
	
	new_user.save().then(user => res.json(user));
});

module.exports = router;
