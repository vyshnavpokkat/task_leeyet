import logo from './logo.svg';
import './App.css';
import RegPage from './components/RegPage';
import LogPage from './components/LogPage';
import ForgotPassword from './components/ForgotPassword';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataPage from './components/DataPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogPage />} />
          <Route path='/regPage' element={<RegPage />} />
          <Route path="/forgetpage" element={<ForgotPassword />} />
          <Route path="/dataPage" element={<DataPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
