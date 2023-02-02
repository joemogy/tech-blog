const withAuth = (req, res, next) => {
    if (!req.session.userName_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;