// Translate
// --
// path: /v1/gifs/translate
// docs: https://developers.giphy.com/docs/#operation--gifs-translate-get

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

  return this.request(url, params, succCb, errCb);
};