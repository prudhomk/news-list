export const fetchArticles = async () => {
  const res = await fetch('https://newsapi.org/v2/everything&apiKey=API_KEY');
  const json = await res.json();

  return json;
};




export const fetchBySearch = async (query) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=API_KEY`);
  const json = await res.json();

  return json;
};

