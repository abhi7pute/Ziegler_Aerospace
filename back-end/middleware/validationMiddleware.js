
function validateInput(req, res, next) {
    const { data } = req.body;
  
    if (!data) {
      return res.status(400).json({ message: 'Data is required' });
    }
    next();
  }
  
  module.exports = validateInput;
  