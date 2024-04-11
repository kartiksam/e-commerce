const mongoose = require("mongoose");
const Db = process.env.DB;
mongoose
  .connect(Db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  //these are callbacsks runs whwn errro come or db
  .then(() => console.log("database connected"))
  .catch((error) => console.log("error" + error.message));
