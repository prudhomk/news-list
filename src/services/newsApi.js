/* eslint-disable max-len */


export const fetchArticles = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://newsapi.org/v2/everything?domains=theonion.com&apiKey=${process.env.API_KEY}`);
  const json = await res.json();

  return json.articles;
};




export const fetchBySearch = async (query) => {
  
  // eslint-disable-next-line max-len
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`);
  const json = await res.json();
  console.log(json.articles);
  return json.articles;
};

