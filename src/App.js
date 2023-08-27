import GlobalStyle from 'assets/styles/GlobalStyle';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}
