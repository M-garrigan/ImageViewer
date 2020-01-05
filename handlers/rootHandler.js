
module.exports = (request, h) => h.view('index', {
  title: 'Reddit',
  message: 'Dynamic p tag',
  redditPost: ''
});