const fs = require('fs');

// Initialize the database with an empty object
fs.readFile('src/db.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else if (data.length === 0) {
        fs.writeFile('src/db.json', '{}', 'utf-8', (writeErr) => {
            if (writeErr) {
                console.log(writeErr);
            }
        });
    }
});

function readAllRatings() {
    return new Promise((resolve, reject) => {
        fs.readFile('src/db.json', 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

function addRating(key, value) {

}
