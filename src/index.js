const express = require(`express`);

const middlewareLogsRequest = require('./middleware/logs')
const usersRouter = require('./routes/users')
const app = express ();
app.use(express.json());

app.use(middlewareLogsRequest);

app.use(express.json());

app.use('/users', usersRouter);

app.listen(4000, ()=> {
    console.log('listening on port 4000')
});