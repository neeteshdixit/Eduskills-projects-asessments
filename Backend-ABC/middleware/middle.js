// types of middleware functions in Express.js:
// 1. Application-level middleware: These are middleware functions that are bound to an instance of the Express application using app.use() or app.METHOD(). They can be used for tasks such as logging, authentication, and error handling.
// 2. Router-level middleware: These are middleware functions that are bound to an instance of the Express router using router.use() or router.METHOD(). They can be used for tasks such as validating request parameters or handling specific routes.
// 3. Error-handling middleware: These are middleware functions that are defined with four parameters (err, req, res, next) and are used to handle errors that occur in the application. They can be used to log errors, send error responses, or perform other error-handling tasks.
// 4. Built-in middleware: Express.js provides several built-in middleware functions such as express.json(), express.urlencoded(), and express.static() that can be used for parsing request bodies, serving static files, and other common tasks.
// 5. Third-party middleware: There are many third-party middleware packages available for Express.js that can be used for tasks such as authentication, logging, and validation. Examples include Passport.js for authentication and Morgan for logging.

// Application-level middleware- eska mtlb hai ki ye middleware function pure application ke liye use hoga, iska use app.use() ke sath kiya jata hai.
// Router-level middleware- iska mtlb hai ki ye middleware function sirf ek specific route ke liye use hoga, iska use router.use() ke sath kiya jata hai.
// Error-handling middleware- iska mtlb hai ki ye middleware function error ko handle karega, iska use app.use() ke sath kiya jata hai, lekin isme 4 parameters hote hai (err, req, res, next).
// Built-in middleware- iska mtlb hai ki ye middleware function Express.js ke dwara provide kiya jata hai, jaise express.json(), express.urlencoded(), express.static().
// Third-party middleware- iska mtlb hai ki ye middleware function kisi third-party package ke dwara provide kiya jata hai, jaise Passport.js for authentication and Morgan for logging.