const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const usersRouter = require('./routes/Users');
app.use('/auth', usersRouter);
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);
const commentsRouter = require('./routes/Comments');
app.use('/comments', commentsRouter);

db.sequelize.sync().then(() => {
    app.listen(5006, () => {
        console.log('Server running on port: 5006');
    });
});
