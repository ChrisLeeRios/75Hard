const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config'); 

// Make sure these lines are above any app.get app.post lines
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./server/routes/sfhard.routes')(app); // Change this line 

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})