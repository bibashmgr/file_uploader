const express = require('express');

// controllers
const {
  postSingleFile,
  postMutipleFiles,
  getAllFiles,
  getSingleFile,
  downloadSingleFile,
  deleteSingleFile,
} = require('../controllers/file.controller.js');

// helpers
const { upload } = require('../middlewares/upload.js');

const router = express.Router();

router.post('/single/upload', upload.single('file'), postSingleFile);

router.post('/mutiple/upload', upload.array('files', 5), postMutipleFiles);

router.get('/', getAllFiles);

router.get('/:fileName', getSingleFile);

router.get('/:fileName/download', downloadSingleFile);

router.delete('/:fileName/delete', deleteSingleFile);

module.exports = router;
