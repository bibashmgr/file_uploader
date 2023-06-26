const express = require('express');

// controllers
const {
  postSingleFile,
  getAllFiles,
  getSingleFile,
  downloadSingleFile,
  deleteSingleFile,
} = require('../controllers/file.controller.js');

// helpers
const { upload } = require('../middlewares/upload.js');

const router = express.Router();

router.post('/upload', upload.single('file'), postSingleFile);

router.get('/', getAllFiles);

router.get('/:fileName', getSingleFile);

router.get('/:fileName/download', downloadSingleFile);

router.delete('/:fileName/delete', deleteSingleFile);

module.exports = router;
