// types of middleware functions in Express.js:
// 1. Application-level middleware: These are middleware functions that are bound to an instance of the Express application using app.use() or app.METHOD(). They can be used for tasks such as logging, authentication, and error handling.
// 2. Router-level middleware: These are middleware functions that are bound to an instance of the Express router using router.use() or router.METHOD(). They can be used for tasks such as validating request parameters or handling specific routes.
// 3. Error-handling middleware: These are middleware functions that are defined with four parameters (err, req, res, next) and are used to handle errors that occur in the application. They can be used to log errors, send error responses, or perform other error-handling tasks.
// 4. Built-in middleware: Express.js provides several built-in middleware functions such as express.json(), express.urlencoded(), and express.static() that can be used for parsing request bodies, serving static files, and other common tasks.
// 5. Third-party middleware: There are many third-party middleware packages available for Express.js that can be used for tasks such as authentication, logging, and validation. Examples include Passport.js for authentication and Morgan for logging.

// Application-level middleware- eska mtlb hai  is