
const pug = require('pug');

const pugStr = `doctype html
html(lang='en')
  body
    nav#s2-nav
    h1 #{title}
    .index-wrapper
      p #{message}
    a(href='/book/123')
    `;

let html = pug.compile(pugStr, {pretty: true})


module.exports = (request, h) => h.view(
  'pug',
  {
    pugSample: pugStr,
    htmlSample: html({
      title: 'Example', 
      message: 'A dynamic message'
    }),
    linkActive: 'pug'
  }
);