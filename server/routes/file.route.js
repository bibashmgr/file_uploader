const express = require('express');

// controllers
const {
  uploadSingleFile,
  getAllFiles,
  getSingleFile,
  downloadSingleFile,
  deleteSingleFile,
} = require('../controllers/file.controller.js');

// middlewares
const { upload } = require('../middleware/upload.js');
const { validateFileBody } = require('../middleware/validator.js');

const router = express.Router();

router.post(
  '/upload',
  validateFileBody,
  upload.single('file'),
  uploadSingleFile
);

router.get('/', getAllFiles);

router.get('/:fileName', getSingleFile);

router.get('/:fileName/download', downloadSingleFile);

router.delete('/:fileName/delete', deleteSingleFile);

module.exports = router;
