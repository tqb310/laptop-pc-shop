const mongoose = require('mongoose');

async function connect() {
    // await console.log(process.env.)
  await mongoose.connect(process.env.DATABASE_URI);
}

module.exports = {
    connect
}