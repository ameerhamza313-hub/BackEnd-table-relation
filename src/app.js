import "dotenv/config";
import { dbConnection } from './dbConnection/config.js';
import syncDB from './dbConnection/init.js';
import allRouter from "./router/index.js";
import express from 'express';
dbConnection();
syncDB();
const app = express();
app.use(express.json());
app.use(allRouter);

app.listen(3001, () => {
  console.log("server started at 3001 port");
});