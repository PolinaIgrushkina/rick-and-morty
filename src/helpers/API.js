import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const fetchCharacters = async (page = 1, name = '') => {
  try {
    const response = await api.get('/character', {
      params: {
        page,
        name,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 404) {
      return alert('There are no characters with this name.');
    }
  }
};

export const fetchCharacterDetails = async character_id => {
  const response = await api.get(`/character/${character_id}`);
  return response.data;
};
