const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config'); 

// Make sure these lines are above any app.get app.post lines
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./routes/sfhard.routes')(app); // Change this line 

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})