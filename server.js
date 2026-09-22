require('dotenv').config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const movieRoutes = require("./routes/movieRoutes");

// PORT
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());


// Routes
app.use('/api', movieRoutes);


//LISTENING TO APP
app.listen(PORT, () => {
    console.log(`Server is running localhost:${PORT}`);
});