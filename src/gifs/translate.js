// Translate
// --
// https://github.com/Giphy/GiphyAPI#translate-endpoint

export default function translate(params, succCb, errCb) {
  let url = 'gifs/translate';

  // Check for required parameters
  if('s' in params) {
    url += `?s=${params.s.replace(' ', '+')}`;
    delete params.s;
  } else {
    const eMsg = 'giphy.js: No query.';
    if(errCb) {
      errCb(eMsg);
    } else {
      console.error(eMsg);
    }
  }

  this.request(url, params, succCb, errCb);
};