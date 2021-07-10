const express = require("express");
const app = express();
const morgan = require("morgan");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(morgan("dev"));
const Dotenv = require("dotenv");
Dotenv.config({ path: `${__dirname}/.env` });

app.use(express.json());
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});

