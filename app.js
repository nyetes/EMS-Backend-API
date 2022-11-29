const express = require('express');
const app = express();
const db = require('./database')
const userRouter = require('./routes/userRoutes')
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.json());

app.use(express.json());

// app.get('/', (req, res) => {
    // res.send("API is running");
// });
 
// routes
app.use('/api',userRouter)

// Server Listening

const PORT = 5000;

app.listen(PORT, () => 
    console.log(`Server running on port:http://localhost:${PORT}`)
);