import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./middlewares";
import customerRoutes from "./routers/customer.router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/customers", customerRoutes);

app.use(errorHandler as express.ErrorRequestHandler);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log("Database connection error:", error));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
