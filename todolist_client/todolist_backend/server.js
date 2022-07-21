const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({
    token: "test123",
  });
});

app.use(express.static(path.join(__dirname, "./todolist_client/build")));
app.get("*", function (_, res) {
  res.sendFile(path.join(__dirname, "./todolist_client/build/index.html")),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    };
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on PORT ${port}`));
