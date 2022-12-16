const express = require("express");
const connectDB = require("./db/connectDB");
const app = express();
const MONGO_URI =
  "mongodb+srv://rajat4984:rajat4984@nodeexpressproject.zv05z.mongodb.net/?retryWrites=true&w=majority";
const port = 5000;
app.use(express.static("./public"));
app.use(express.json());

app.get("/newEq", (req, res) => {
  res.json({
    user: "user1",
  });
});

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(port, () => {
      console.log("Server is listening on port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
