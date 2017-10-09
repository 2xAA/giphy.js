// Random
// --
// https://github.com/Giphy/GiphyAPI#random-endpoint

export default function random(params, succCb, errCb) {
  let url = 'gifs/random';

  // Check for required parameters
  if('tag' in params) {
    url += `?tag=${params.tag}`;
    delete params.tag;
  }

  this.request(url, params, succCb, errCb);
};