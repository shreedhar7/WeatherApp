import axios from 'axios';

const NEWS_API_KEY = 'a1fbd4501a7c273244de28d8c555dfb0'; 

const baseUrl = 'https://gnews.io/api/v4/search';

export const fetchFilteredNews = async (query) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: query,
        token: NEWS_API_KEY,
        lang: 'en',
        max: 10,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
};
