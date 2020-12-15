const express = require('express');
require('dotenv').config();
const dbConnect = require('./models/dbConnect');
const router = require('./routers/router');

// server
const app = express();
const port = process.env.port || 5001;
app.listen(port, () => {
    console.log(`I'm listening on port: ${port}`)
})

dbConnect();
app.use(express.json());
// app.use("/api", router);