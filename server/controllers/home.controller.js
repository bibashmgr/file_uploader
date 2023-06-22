const welcomeScreen = (req, res) => {
  try {
    res.status(200).json({
      data: null,
      success: true,
      message: 'Welcome to vclass',
    });
    logger.info('Welcome to vclass');
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: error.message,
    });
    logger.error(error.message);
  }
};

module.exports = { welcomeScreen };
