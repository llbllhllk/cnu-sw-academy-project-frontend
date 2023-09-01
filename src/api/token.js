import instance from 'api';

export const fetchGetToken = async () => {
  const res = await instance.get('/member/temp');
  window.localStorage.setItem('token', JSON.stringify(res.data));

  const token = res.data;
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
  return JSON.parse(jsonPayload);
};
