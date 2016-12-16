var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    path = require("path");
    
app.use("/bower_components",express.static(path.join(__dirname, "bower_components")));
app.use("/my_components", express.static(path.join(__dirname, "my_components")));

app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "index.html")) ;
});

app.listen(port);