const express = require('express');
const io = require('./io');

const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});
