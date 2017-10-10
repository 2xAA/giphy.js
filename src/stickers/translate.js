// STICKER Translate
// --
// path: /v1/stickers/translate
// docs: https://developers.giphy.com/docs/#operation--stickers-translate-get

export default function translate(params, succCb, errCb) {
  let url = 'stickers/translate';

  // Check for required parameters
  if('s' in params) {
    url += `?s=${params.s}`;
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
}