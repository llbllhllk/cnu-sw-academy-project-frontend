import instance from 'api';

export const fetchGetToken = async () => {
  return (await instance.get('/member/temp')).data;
};
