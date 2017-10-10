// STICKER Roulette (Random)
// --
// path: /v1/stickers/random
// docs: https://developers.giphy.com/docs/#operation--stickers-random-get

export default function random(params, succCb, errCb) {
  let url = 'stickers/random';

  // Check for required parameters
  if('tag' in params) {
    url += `?tag=${params.tag}`;
    delete params.tag;
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