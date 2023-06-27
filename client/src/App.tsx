import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import SingleUpload from './pages/SingleUpload';
import MultipleUpload from './pages/MultipleUpload';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingleUpload />} />
        <Route path='/mutiple' element={<MultipleUpload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
