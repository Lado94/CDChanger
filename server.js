const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const { createToken, checkToken, delToken } = require("./services/authentication");
const usersRouter = require("./routes/users");
const artistsRouter = require("./routes/artists");
const genresRouter = require("./routes/genres");
const compactDisksRouter = require("./routes/compact-disks");
const ordersRouter = require("./routes/orders");
const orderDetailsRouter = require("./routes/order-details");


const { errorLogger } = require("./services/errorHandler");
const { createUser } = require("./controllers/users");

const { createDB } = require("./models/index");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://127.0.0.1:8080",
    credentials: true,
  })
);
app.use(helmet());
app.post("/login", createToken);
app.get("/logout", delToken)
app.post("/create-user", createUser);

app.use(checkToken);

app.use("/users", usersRouter);
app.use("/artists", artistsRouter);
app.use("/genres", genresRouter);
app.use("/compact-disks", compactDisksRouter);
app.use("/orders", ordersRouter);
app.use("/orderDetails", orderDetailsRouter);

app.use(errorLogger);

//connect and sync DB and start server
const main = async() => {
  const PORT = process.env.PORT;
  const RESET = "\x1b[0m";

  await createDB();

  app.listen(PORT, () => {
    console.log(`${RESET}Server is running on port ${PORT}`);
  });
  
}

main();

module.exports = app;
