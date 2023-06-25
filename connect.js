const mongoose = require('mongoose');

async function connectToMongoDB(url) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Cloud!');
  } catch (error) {
    console.error('Failed to connect to MongoDB Cloud:', error);
  }
}

module.exports = {
  connectToMongoDB,
};
