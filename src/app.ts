import express from "express";
import morgan from "morgan";
import cors from "cors";

import { router } from "./routes/router";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(morgan("short"));

app.use("/", router);

app.listen(PORT, (): void => console.log(`server listening on port ${PORT}`));

export default app;
