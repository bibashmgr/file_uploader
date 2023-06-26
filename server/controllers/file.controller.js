// helpers
const GfsBucket = require('../helpers/gridfsManager.js');

const postSingleFile = async (req, res) => {
  console.log('File uploaded successfully');
  return res.status(201).json({
    data: req.file,
    success: true,
    message: 'File uploaded successfully',
  });
};

const getAllFiles = async (req, res) => {
  let gfsBucket = new GfsBucket();

  await gfsBucket
    .find()
    .toArray()
    .then((files, error) => {
      if (error) {
        console.log(error.message);
        return res.status(400).json({
          data: null,
          success: false,
          message: error.message,
        });
      }

      console.log('Fetch All Files');
      return res.status(200).json({
        data: files,
        success: true,
        message: 'Fetch All Files',
      });
    });
};

const getSingleFile = async (req, res) => {
  let gfsBucket = new GfsBucket();

  await gfsBucket
    .find({ filename: req.params.fileName })
    .toArray()
    .then((files, error) => {
      if (error) {
        console.log(error.message);
        return res.status(400).json({
          data: null,
          success: false,
          message: error.message,
        });
      }

      if (!files || files.length === 0) {
        console.log('Failed to fetch fileInfo');
        return res.status(404).json({
          data: null,
          success: false,
          message: 'Failed to fetch fileInfo',
        });
      }

      console.log('Fetch File Info');
      return res.status(200).json({
        data: files[0],
        success: true,
        message: 'Fetch fileInfo',
      });
    });
};

const downloadSingleFile = async (req, res) => {
  let gfsBucket = new GfsBucket();

  await gfsBucket
    .find({ filename: req.params.fileName })
    .toArray()
    .then((files, error) => {
      if (error) {
        console.log(error.message);
        return res.status(400).json({
          data: null,
          success: false,
          message: error.message,
        });
      }

      if ((!files, files.length === 0)) {
        console.log('Failed to fetch fileInfo');
        return res.status(404).json({
          data: null,
          success: false,
          message: 'Failed to fetch fileInfo',
        });
      }

      console.log('Download file');
      const readStream = gfsBucket.openDownloadStream(files[0]._id);
      readStream.pipe(res);
    });
};

const deleteSingleFile = async (req, res) => {
  let gfsBucket = new GfsBucket();

  await gfsBucket
    .find({ filename: req.params.fileName })
    .toArray()
    .then((files, error) => {
      if (error) {
        console.log(error.message);
        return res.status(400).json({
          data: null,
          success: false,
          message: error.message,
        });
      }

      if (!files || files.length === 0) {
        console.log('Failed to delete file');
        return res.status(404).json({
          data: null,
          success: false,
          message: 'Failed to delete file',
        });
      }

      gfsBucket.delete(files[0]._id);
      console.log('Delete file');
      return res.status(200).json({
        data: null,
        success: true,
        message: 'Delete file',
      });
    });
};

module.exports = {
  postSingleFile,
  getAllFiles,
  getSingleFile,
  downloadSingleFile,
  deleteSingleFile,
};
