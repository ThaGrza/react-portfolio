const express = require("express");
const path = require("path");
const PORT   = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function(){
  console.log(`🤖 ==> Server listening on port ${PORT}`);
});