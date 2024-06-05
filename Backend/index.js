const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();


// Middlewares
app.use(cors);
app.use(express.json());


//Routes

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/authentication')
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Failed to Connect to MongoDB :", error));

// Global Error Handler
app.use((err , req, res ,next) => {
    err.statusCode = err.statusCode || 500,
    err.status = err.status || 'Error'
    
    res.status(err.statusCode).json({
        status : err.status,
        message : err.message
    });
});
// Server Listen to Port

// Initialise the port
const port = 3000;
app.listen(port, () => console.log(`App is listening on ${port}`));