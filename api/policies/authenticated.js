/**
 * Allow any authenticated user.
 */
module.exports = function (req, res, ok) {

  // User is allowed, proceed to controller
  if (req.isAuthenticated()) {
    return ok();
  }

  // User is not allowed
  else {
    return res.redirect('/login');
  }
};