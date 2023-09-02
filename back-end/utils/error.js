// error.js

// Function to handle and format errors
const handleError = (res, error) => {
    // Determine the status code based on the type of error
    let statusCode = 500; // Internal Server Error by default
    let errorMessage = 'Internal Server Error';
  
    if (error instanceof SyntaxError) {
      // Handle JSON parsing errors (e.g., invalid JSON in the request)
      statusCode = 400; // Bad Request
      errorMessage = 'Invalid JSON';
    } else if (error.name === 'ValidationError') {
      // Handle Mongoose validation errors
      statusCode = 422; // Unprocessable Entity
      errorMessage = error.message;
    } else if (error.name === 'UnauthorizedError') {
      // Handle unauthorized access errors (e.g., JWT verification failed)
      statusCode = 401; // Unauthorized
      errorMessage = 'Unauthorized Access';
    } else if (error.name === 'NotFound') {
      // Handle resource not found errors (e.g., when a record doesn't exist)
      statusCode = 404; // Not Found
      errorMessage = error.message;
    }
  
    // Log the error (you can customize this part to log errors as needed)
    console.error(`Error: ${errorMessage}`);
    console.error(error.stack);
  
    // Send the error response to the client
    res.status(statusCode).json({ error: errorMessage });
  };
  
  module.exports = { handleError };
  