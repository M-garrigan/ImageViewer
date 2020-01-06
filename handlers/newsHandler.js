
const axios = require('axios');

module.exports = async (request, h) => {
  
  const response = await axios.get('https://www.reddit.com/r/news.json')
    .then( res => res.data.data )
    .catch(err => err);

  const newsTitles = response.children.map( item => ({
    title: item.data.title,
    url: item.data.url,
    score: item.data.score,
    ups: item.data.ups,
    downs: item.data.downs,
    domain: item.data.domain
  }));

  return h.view('news', { 
    redditNews: JSON.stringify(newsTitles)
  });
};