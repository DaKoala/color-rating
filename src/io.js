const fs = require('fs');

let db;
// Initialize the database with an empty object and load data
fs.readFile('src/db.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else if (data.length === 0) {
        fs.writeFile('src/db.json', '{}', 'utf8', (writeErr) => {
            if (writeErr) {
                console.log(writeErr);
            } else {
                db = {};
            }
        });
    } else {
        db = JSON.parse(data);
    }
});

function getAllRatings() {
    return db;
}

function addRating(key, value) {
    const isAddingNew = Object.prototype.hasOwnProperty.call(db, key);
    const oldValue = db[key];
    db[key] = value;
    return new Promise((resolve, reject) => {
        fs.writeFile('src/db.json', JSON.stringify(db), 'utf8', (err, data) => {
            if (err) {
                if (isAddingNew) {
                    delete db[key];
                } else {
                    db[key] = oldValue;
                }
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = {
    getAllRatings,
    addRating,
};
