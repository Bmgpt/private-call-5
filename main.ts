import express from "https://esm.sh/express@4.18.2";

const app = express();

app.get("/", function (req, res) {
  if(req.query.num){
    res.redirect("tel:124");
  }else{
    res.end("Invalid!")
  }
});

app.listen(3000);
console.log("listening on http://localhost:3000/");