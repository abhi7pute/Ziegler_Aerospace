// validationMiddleware.js
function validateInput(req, res, next) {
    const { data } = req.body;
  
    if (!data) {
      return res.status(400).json({ message: 'Data is required' });
    }
  
    // Add more validation logic here
  
    next();
  }
  
  module.exports = validateInput;
  