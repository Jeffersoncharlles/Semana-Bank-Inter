//import "reflect-metadata";
import express from 'express';
import { createConnection } from 'typeorm';
import { globalErrors } from './middlewares/globalErros';
import { routes } from './routes';

createConnection().then(connection => {
  const app = express();
  const PORT = 3333;

  //app.get('/', (req, res) => res.send('Express + TypeScript Server'));
  app.use(routes)
  app.use(globalErrors)

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log("Unable to connect to the database", error)
})