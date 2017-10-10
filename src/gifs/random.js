// Random
// --
// path: /v1/gifs/random
// docs: https://developers.giphy.com/docs/#operation--gifs-random-get

export default function random(params, succCb, errCb) {
  let url = 'gifs/random';

  // Check for required parameters
  if('tag' in params) {
    url += `?tag=${params.tag}`;
    delete params.tag;
  }

  return this.request(url, params, succCb, errCb);
}