const welcomeScreen = (req, res) => {
  try {
    res.status(200).json({
      data: null,
      success: true,
      message: 'Welcome to vclass',
    });
    console.log('Welcome to vclass');
  } catch (error) {
    res.status(500).json({
      data: null,
      success: false,
      message: error.message,
    });
    console.log(error.message);
  }
};

module.exports = { welcomeScreen };
