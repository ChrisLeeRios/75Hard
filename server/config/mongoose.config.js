const mongoose = require('mongoose');

// Change database name after localhost/
mongoose.connect("mongodb://localhost/sfhard", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));