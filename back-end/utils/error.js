
const handleError = (res, error) => {
    let statusCode = 500; 
    let errorMessage = 'Internal Server Error';
  
    if (error instanceof SyntaxError) {
      statusCode = 400; // Bad Request
      errorMessage = 'Invalid JSON';
    } else if (error.name === 'ValidationError') {
      statusCode = 422; // Unprocessable Entity
      errorMessage = error.message;
    } else if (error.name === 'UnauthorizedError') {
      statusCode = 401; // Unauthorized
      errorMessage = 'Unauthorized Access';
    } else if (error.name === 'NotFound') {
      statusCode = 404; // Not Found
      errorMessage = error.message;
    }
  
    console.error(`Error: ${errorMessage}`);
    console.error(error.stack);
  
    res.status(statusCode).json({ error: errorMessage });
  };
  
  module.exports = { handleError };
  