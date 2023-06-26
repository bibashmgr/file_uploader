const express = require('express');

// controllers
const {
  uploadSingleFile,
  getAllFiles,
  getSingleFile,
  viewSingleFile,
} = require('../controllers/file.controller.js');

// middlewares
const { upload } = require('../helpers/upload.helper.js');

const router = express.Router();

router.post('/upload', upload.single('file'), uploadSingleFile);

router.get('/', getAllFiles);

router.get('/:fileName', getSingleFile);

router.get('/:fileName/view', viewSingleFile);

module.exports = router;
