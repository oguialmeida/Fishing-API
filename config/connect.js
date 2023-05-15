const { OPEN_CREATE } = require("sqlite3");

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("../data/datafish.db", sqlite3.OPEN_READWRITE | OPEN_CREATE, (err) => {
    if(err) {
        return console.error(err.message);
    };
    console.log("Connected to the in-memory database");
});

db.close((err) =>{
    if (err) {
        return console.error(err.message);
    }
    console.log("Close the connection");
});