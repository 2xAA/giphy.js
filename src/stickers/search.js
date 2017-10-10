// STICKER Search
// --
// path: /v1/stickers/search
// docs: https://developers.giphy.com/docs/#operation--stickers-search-get

export default function search(params, succCb, errCb) {
  let url = 'stickers/search';

  // Check for required parameters
  if('q' in params) {
    url += `?q=${params.q}`;
    delete params.q;
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