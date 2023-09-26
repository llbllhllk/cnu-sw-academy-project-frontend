import Home from 'pages/Home';
import Store from 'pages/Store';
import Filter from 'pages/Filter';
import Login from 'pages/Login';
import SignUp from 'components/login/SignUp';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/filter' element={<Filter/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} /> 
      {/* 회원가입 */}

    </Routes>
  );
};
export default Router;
