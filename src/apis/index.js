import axios from 'axios';
import interceptors from './interceptors';

const END_POINT = 'https://dapi.kakao.com/v2/search/vclip';

const makeInstance = (baseURL) => {
  const axiosInstance = axios.create({ baseURL });
  return interceptors(axiosInstance);
};

const instance = makeInstance(END_POINT);

export const getVideoListAPI = ({ search, sort = 'accuracy', page, size = 10 }) => {
  const params = { query: search, sort, page, size };
  if (!search) throw new Error('search는 필수입니다!');

  return instance.get('', { params });
};
