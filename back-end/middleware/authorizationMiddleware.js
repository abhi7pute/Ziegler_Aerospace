
function authorizeUser(req, res, next) {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Permission denied' });
    }
    next();
  }
  
  module.exports = authorizeUser;
  