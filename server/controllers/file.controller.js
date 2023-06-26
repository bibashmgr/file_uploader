const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

const uploadSingleFile = async (req, res) => {
  res.status(201).json({
    data: req.files,
    success: true,
    message: 'File uploaded successfully',
  });
};

const getAllFiles = async (req, res) => {
  let gfs = new Grid(mongoose.connections[0].db, mongoose.mongo);
  gfs.collection('uploads');

  await gfs.files
    .find()
    .toArray()
    .then((files, error) => {
      if (error) {
        res.status(400).json({
          data: null,
          success: false,
          message: error.message,
        });
      }

      res.status(200).json({
        data: files,
        success: true,
        message: 'Fetch All Files',
      });
    });
};

const getSingleFile = async (req, res) => {
  let gfs = new Grid(mongoose.connections[0].db, mongoose.mongo);
  gfs.collection('uploads');

  await gfs.files
    .findOne({ filename: req.params.fileName })
    .then((file, error) => {
      if (error) {
        res.status(400).json({
          data: null,
          success: false,
          message: error.message,
        });
      }

      if (!file) {
        res.status(404).json({
          data: null,
          success: false,
          message: 'Failed to fetch fileInfo',
        });
      } else {
        res.status(200).json({
          data: file,
          success: true,
          message: 'Fetch File Info',
        });
      }
    });
};

const viewSingleFile = async (req, res) => {
  let gfs = new Grid(mongoose.connections[0].db, mongoose.mongo);
  gfs.collection('uploads');

  await gfs.files
    .findOne({ filename: req.params.fileName })
    .then((file, error) => {
      if (error) {
        res.status(400).json({
          data: null,
          success: false,
          message: error.message,
        });
      }

      if (!file) {
        res.status(404).json({
          data: null,
          success: false,
          message: 'Failed to fetch fileInfo',
        });
      } else {
        res.status(200).json({
          data: file,
          success: true,
          message: 'Fetch File Info',
        });
      }
    });
};

module.exports = {
  uploadSingleFile,
  getAllFiles,
  getSingleFile,
  viewSingleFile,
};
