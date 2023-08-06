const express = require("express");
const cors = require("cors");
// OLD Swagger
// const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// New Swagger Way latest
const { swaggerServe, swaggerSetup } = require('./Config/swaggerConfig')

require("dotenv").config();

const app = express();

const corOption = {
  origin: "https://localhost:8080",
};

// // OLD SWAGGER WAY
// // const options = {
// //   definition: {
// //     openapi: '3.0.0',
// //     info: {
// //       title: "Node JS API Project for SQL",
// //       version: '1.0.0'
// //     },
// //     servers: [
// //       {
// //         url: 'http://localhost:8080/'
// //       }
// //     ]
// //   },
// //   apis: ['./Routes/productRouter.js']
// // }
// //swagger API
// const swaggerSpecs = swaggerJSDoc(options)
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

// Latest swagger way
app.use("/api-docs", swaggerServe, swaggerSetup); 

// Middlewares
app.use(cors(corOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
const router = require("./Routes/productRouter.js");
app.use("/api/products", router);

//Testing API
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

module.exports = app;