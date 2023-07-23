import express from "https://esm.sh/express@4.18.2";

const app = express();

app.get("/", function (req, res) {
    if(req.query.number){
      res.redirect("tel:*31*+"+req.query.number);
    }else{
      res.send("Invalid")
    }
});

app.listen(3000);
console.log("listening on http://localhost:3000/");
