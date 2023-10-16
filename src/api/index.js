import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://223.130.131.136:8080',
});

// instance.defaults.headers.get['Content-Type'] = 'application/json';
// instance.defaults.headers.post['Content-Type'] = 'application/json';
// instance.defaults.headers.put['Content-Type'] = 'application/json';

// instance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('accesToken');
//     if (token) {
//       config.headers = {
//         Authorization: `Bearer ${JSON.parse(token)}`,
//       };
//     } else {
//       config.headers = {
//         Authorization: ``,
//       };
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

export default instance;
