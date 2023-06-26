const mongoose = require('mongoose');

class GfsBucket {
  static instance;

  constructor() {
    if (GfsBucket.instance) {
      return GfsBucket.instance;
    }

    return new mongoose.mongo.GridFSBucket(mongoose.connections[0].db, {
      bucketName: 'uploads',
    });
  }
}

module.exports = GfsBucket;
