// STICKER Trending
// --
// path: /v1/stickers/trending
// docs: https://developers.giphy.com/docs/#operation--stickers-trending-get

export default function trending(params, succCb, errCb) {
  let url = 'stickers/trending';

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