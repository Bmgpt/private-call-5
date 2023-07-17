import express from "https://esm.sh/express@4.18.2";

const app = express();

app.get("/", function (req, res) {
    res.redirect("tel:124");
});

app.listen(3000);
console.log("listening on http://localhost:3000/");