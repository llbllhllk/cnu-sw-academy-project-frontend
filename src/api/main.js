import instance from 'api';

export const fetchGetFreeBoard = async () => {
  return (await instance.get('/main/freeboard')).data;
};

export const fetchGetPopularBoard = async () => {
  return (await instance.get('/main/popular')).data;
};

export const fetchGetSlider = async () => {
  return (await instance.get('/main/recent')).data;
};
