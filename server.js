const express = require("express");
const app = express();
const morgan = require("morgan");
const allRoutes = require("./routes/routes");
require('dotenv').config();

// PORT
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(morgan("dev"))
app.use(express.json());


// Routes
app.use('/api', allRoutes)


//LISTENING TO APP
app.listen(PORT, () => {
    console.log(`Server is running localhost:${PORT}`);
});