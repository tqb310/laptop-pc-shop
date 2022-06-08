const mongoose = require('mongoose');

async function connect() {
    // await console.log(process.env.)
    return mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = {
    connect,
};
