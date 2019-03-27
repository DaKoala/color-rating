const express = require('express');
const io = require('./io');

const app = express();

app.get('/get', (req, res) => {
    res.send(io.getAllRatings());
});

app.get('/add/:item/:rating', async (req, res) => {
    const msg = {
        message: null,
    };
    const { item, rating } = req.params;
    const ratingNum = parseInt(rating, 10);
    if (Number.isNaN(ratingNum)) {
        msg.message = 'Invalid rating value(should be a number)!';
    } else {
        await io.addRating(item, ratingNum);
        msg.message = 'Success!';
    }
    res.send(Object.assign({
        item,
        rating,
    }, msg));
});

app.get('/*', (req, res) => {
    res.send('Visit localhost:3000/get to view all ratings and localhost:3000/add/[color]/[rating] to add one.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});
