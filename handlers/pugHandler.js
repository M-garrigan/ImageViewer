
const pug = require('pug');

const pugStr = `
doctype html
html(lang='en')
  body
    h1 #{title}
    .index-wrapper
      p #{message}
      form.reddit-form(action="/reddit", method="get")
        input.reddit-input(type="text", id="reddit-input", name="reddit")
        button.reddit-button(type="submit") Submit
      .reddit-viewer #{redditPost}`;

let html = pug.compile(pugStr, {pretty: true})


module.exports = (request, h) => h.view(
  'pug',
  {
    pugSample: pugStr,
    htmlSample: html()
  }
);