import Home from 'pages/Home';
import Store from 'pages/Store';
import Filter from 'pages/Filter';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/filter' element={<Filter/>} />

    </Routes>
  );
};
export default Router;
