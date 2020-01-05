
const axios = require('axios');

module.exports = (request, h) => {
  console.log('hand: ', request.query.reddit)
  const query = request.query.reddit;
  const queryString = `https://www.reddit.com/r/${query}.json`;

  axios.get(queryString)
    .then( res => {
      console.log('axios: ', res.data)
      h.view('index', { redditPost: res.data.data });
    });
  
};