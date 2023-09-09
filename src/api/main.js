import instance from 'api';
import axios from 'axios';

export const fetchGetFreeBoard = async () => {
  return (await instance.get('/main/freeboard')).data;
};

export const fetchGetPopularBoard = async () => {
  return (await instance.get('/main/popular')).data;
};

export const fetchGetSlider = async () => {
  return (await instance.get('/main/recent')).data;
};

export const fetchGetStoreList = async() => {
  return (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
}