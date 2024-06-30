import express from 'express';
import routers from './routers/file_routers.js';
import cors from 'cors';
import DB_connection from './database/db.js'

const app = express()

app.use(cors());
app.use('/',routers);

const PORT = 8000;

DB_connection()

app.listen(PORT , () => console.log("Server"))
