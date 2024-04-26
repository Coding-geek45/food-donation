const { connect } = require('mongoose');
const dotenv = require('dotenv');
const connectDB = async () => {
    try {
        const conn = connect(process.env.MONGO_URI);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;