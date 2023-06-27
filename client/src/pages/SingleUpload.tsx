import React, { useState } from 'react';
import axios from 'axios';

type formMessageType = {
  desc: string;
  type: string;
};

const SingleUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [formMessage, setFormMessage] = useState<formMessageType | null>(null);
  const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (file) {
      setIsBtnLoading(true);

      const formData = new FormData();
      formData.append('file', file as Blob, file?.name);

      axios({
        method: 'post',
        baseURL: import.meta.env.VITE_SERVER_BASE_URL,
        url: 'files/single/upload',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': import.meta.env.VITE_SERVER_BASE_URL,
          'Access-Control-Allow-Methods': [
            'GET',
            'POST',
            'PUT',
            'PATCH',
            'DELETE',
          ],
        },
      })
        .then((res) => {
          if (res.data.success) {
            setFile(null);
            showMessage(res.data.message, 'success');
            setIsBtnLoading(false);
          } else {
            showMessage(res.data.message, 'error');
            setIsBtnLoading(false);
          }
        })
        .catch((error) => {
          showMessage(error.message, 'error');
          setIsBtnLoading(false);
        });
    }
  };

  const showMessage = (desc: string, type: string) => {
    setFormMessage({
      desc: desc,
      type: type,
    });

    setTimeout(() => {
      setFormMessage(null);
    }, 3000);
  };

  return (
    <div className='main-container'>
      <form
        className='form'
        encType='multipart/form-data'
        onSubmit={handleSubmit}
      >
        <h2 className='form-header'>Upload Single File</h2>
        <div>
          {formMessage && (
            <p
              className={`form-message ${
                formMessage.type === 'success'
                  ? 'success-message'
                  : 'error-message'
              }`}
            >
              {formMessage.desc}
            </p>
          )}
          <div className='form-dropzone'>
            {!file ? (
              <>
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
              </>
            ) : (
              <div className='upload-file'>
                <svg
                  className='upload-image'
                  version='1.0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='800px'
                  height='800px'
                  viewBox='0 0 64 64'
                  enableBackground='new 0 0 64 64'
                >
                  <path
                    fill='#d1d5db'
                    d='M56,0H8C5.789,0,4,1.789,4,4v56c0,2.211,1.789,4,4,4h48c2.211,0,4-1.789,4-4V4C60,1.789,58.211,0,56,0z
	                M24,20h8c2.211,0,4,1.789,4,4s-1.789,4-4,4h-8c-2.211,0-4-1.789-4-4S21.789,20,24,20z M40,44H24c-2.211,0-4-1.789-4-4s1.789-4,4-4
	                h16c2.211,0,4,1.789,4,4S42.211,44,40,44z'
                  />
                </svg>
                <p className='upload-image-title'>{file.name}</p>
              </div>
            )}
            <input
              type='file'
              name='file'
              id='file'
              className='form-file-input'
              onChange={handleChange}
              accept='image/png, image/jpg, image/jpeg, .pdf'
              required
            />
          </div>
        </div>
        <button type='submit' className='form-button'>
          {isBtnLoading ? <div className='loader'></div> : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default SingleUpload;
