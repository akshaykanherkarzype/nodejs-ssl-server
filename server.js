require("dotenv").config();
const app = require("./app");
//Port
const PORT = process.env.PORT || 8080;

//Server Connection
app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
