const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const connectDB = require('./db/connect')
require('dotenv').config();
const notFound = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//middlewares
app.use(express.static('./public'))
app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
    } catch (error) {
        console.log(error);
    }
}

//todo add login from firebase or from session cook=ie

start();

app.listen(port, console.log(`Server is listening on port ${port}...`));