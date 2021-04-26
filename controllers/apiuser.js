const router = require("express").Router();
const User = require('../models/User');
const passport = require('passport');


// router.get('/password', passport.authenticate('jwt', { session: false }), function(req, res, next) {
//     console.log('router.get.password',req.user)
//     console.log('router.get.password',req.user.email)
//     if (req.user) {
//         res.send({ email: req.user.email });
//     } else {
//         next(createError(400));
//     }
// });


router.get('/User',  function (req, res, next) {

  res.send(`${req.user.email}`);
});


module.exports = router;