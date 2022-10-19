import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://stormy-shelf-93141.herokuapp.com',
});

export const getPostsPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/articles?_page=${pageParam}`, options);
  return response.data;
};
