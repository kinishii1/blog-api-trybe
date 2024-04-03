const express = require('express');
const LoginRouter = require('./routes/LoginRouter');
const UserRouter = require('./routes/UserRouter');
const CategoryRouter = require('./routes/CategoryRouter');
const PostRouter = require('./routes/PostRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', LoginRouter);
app.use('/user', UserRouter);
app.use('/categories', CategoryRouter);
app.use('/post', PostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
