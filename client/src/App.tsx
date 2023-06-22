const App = () => {
  return (
    <div className='main-container'>
      <form className='form'>
        <h2 className='form-header'>Upload File</h2>
        <div className='form-dropzone'>
          <svg
            className='form-dropzone-image'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
          >
            <path
              fill='#d1d5db'
              d='M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z'
            />
          </svg>
          <div className='form-dropzone-text'>
            <p className='form-dropzone-title'>Select a file to upload</p>
            <p className='form-dropzone-desc'>or drag & drop it here.</p>
          </div>
          <input
            className='form-file-input'
            type='file'
            name='file'
            id='file'
          />
        </div>
        <button type='submit' className='form-button'>
          Upload
        </button>
      </form>
    </div>
  );
};

export default App;
