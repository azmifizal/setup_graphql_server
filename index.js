import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import schema from './graphql/index';

const app = express();
const PORT = process.env.PORT || "4000";
const db = 'mongodb://localhost/graphql';

mongoose
    .connect(db, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => console.info('DB connected'))
    .catch(err => console.info(err));

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
);

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`)
});