import instance from 'api';

export const fetchGetToken = async () => {
  const res = await instance.get('/member/temp');
  window.localStorage.setItem('token', JSON.stringify(res.data));
};
