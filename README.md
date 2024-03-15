# BookCR
MongoDB user: Camilo
password: Ulacit123


Troubleshooting:
En caso de encontrar este error => <EADDRINUSE, Address already in use> al correr el servidor npm utilizar este codigo para terminar procesos que esten utilizando el mismo puerto => <sudo lsof -i :8800> para encontrar el PID y luego => <kill -9 <PID>> para terminarlo y poder usar el puerto de nuevo. 
----------------------------------------------------------------
JWT Authentication references:
-https://dvmhn07.medium.com/jwt-authentication-in-node-js-a-practical-guide-c8ab1b432a49

-https://www.loginradius.com/blog/engineering/guest-post/nodejs-authentication-guide/
----------------------------------------------------------------
Encrypting password references:
-https://www.npmjs.com/package/bcryptjs
----------------------------------------------------------------
Proyect structure outline Back-end references:

-https://soonsantos.medium.com/nodejs-api-part-5-model-router-controller-structure-c5b13c2660ae

----------------------------------------------------------------
Mongo connection string: mongodb+srv://Camilo:<password>@bookcr.xgztqr5.mongodb.net/?retryWrites=true&w=majority&appName=BookCR

------------------------------------------------------------------------
Creating the API references:

- https://apidog.com/blog/how-to-create-a-rest-api-with-node-js-and-express/?utm_source=google_dsa&utm_medium=g&utm_campaign=20556541359&utm_content=160582184041&utm_term=&gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNaXlLB9yPy99rdt5MsnZl-SQSbPU9EAdG2-lnk9hA_IkII59RSgjbBoCFUYQAvD_BwE

- https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/

- https://expressjs.com/en/guide/using-middleware.html

--------------------------------------------------------------------------
Creating CRUD operations for mongoDB using Node.JS references:

- https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/
- https://cleverzone.medium.com/performing-crud-operations-in-node-js-and-express-js-with-mongodb-4ea71da2100a

Creating Schemas references: 

- https://mongoosejs.com/docs/guide.html

----------------------------------------------------------------
Error Handling references:

-https://expressjs.com/en/guide/error-handling.html
-https://www.linkedin.com/advice/3/what-best-practices-error-handling-nodejs-skills-web-development

-----------------------------------------------------------------
NodeJs Function support references:

-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function