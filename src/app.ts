import express from "express";

import { conektaApi } from "./api/conekta";

export function init() {
  const app = express();

  app.use(express.json());

  app.use(conektaApi);

  return { app };
}

init().app.listen(3000, () => {
  console.log(`🚀 Server ready at http://localhost:3000`);
});
