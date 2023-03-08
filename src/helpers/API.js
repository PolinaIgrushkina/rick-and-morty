import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const fetchAllCharacters = async (page = 1, searchCharacters = '') => {
  const response = await api.get(
    `/character/?page=${page}&name=${searchCharacters}`
  );
  return response.data.results;
};

export const fetchCharacterDetails = async character_id => {
  const response = await api.get(`/character/${character_id}`);
  return response.data;
};
