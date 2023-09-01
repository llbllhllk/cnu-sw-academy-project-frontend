import Home from 'pages/Home';
import Store from 'pages/Store';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
    </Routes>
  );
};

export default Router;
