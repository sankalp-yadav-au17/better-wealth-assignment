const { connect } = require("mongoose");


async function dbConnect() {
    try {
        await connect(process.env.DB_URL);
        
    } catch (error) {
        console.log("error in db");
    }
}

module.exports = { dbConnect };