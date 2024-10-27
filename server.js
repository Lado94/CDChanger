const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const { createToken, checkToken } = require("./services/authentication");
const usersRouter = require("./routes/users");
const artistsRouter = require("./routes/artists");
const genresRouter = require("./routes/genres");
const compactDisksRouter = require("./routes/compact-disks");
const ordersRouter = require("./routes/orders");

const { errorLogger } = require("./services/errorHandler");
const { createUser } = require("./controllers/users");

const { createDB } = require("./models/index");
const orderRoutes = require("./routes/orders");
const orderDetailRoutes = require("./routes/order-details");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(helmet());
app.post("/login", createToken);
app.post("/create-user", createUser);
app.use("/orders", orderRoutes);
app.use("/orderDetails", orderDetailRoutes);

app.use(checkToken);

app.use("/users", usersRouter);
app.use("/artists", artistsRouter);
app.use("/genres", genresRouter);
app.use("/compact-disks", compactDisksRouter);

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
