// const kazeem = {
//   producer: "Kazeem"
// };

// console.log(kazeem["producer"]);

function hello(a, b) {}

const express = require("expree");
const app = express();

app.get("./", (req, res) => {
  res.send("Hello world");
});

app.get("./api/courses", (res, req) => {
  res.send([1, 2, 3]);
});

app.listen(3000, () => console.log("listening on 3000...."));
