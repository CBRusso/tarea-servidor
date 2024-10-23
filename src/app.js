const express = require("express");
const app = express();
const PORT = 3000
const sessions = require("express-session");
const cookieParser = require("cookie-parser");

const reservasRouter = require("./routes/reservasRoutes.js");
const viewsRouter = require("./routes/viewsRoutes.js");

app.listen (PORT, () => console.log ("Servidor escuchando desde el puerto",PORT));

const unDia = 1000 * 60 * 60 * 24;

app.set ("view.engine","ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  sessions({
    secret: "123456",
    saveUninitialized: true,
    cookie: { maxAge: unDia },
    resave: false,
  })
);


app.use("/inicio", reservasRouter);
app.use("/", viewsRouter);