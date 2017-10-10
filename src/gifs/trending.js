// Trending GIFs
// --
// path: /v1/gifs/trending
// docs: https://developers.giphy.com/docs/#operation--gifs-trending-get

export default function translate(succCb, errCb) {
  const url = 'gifs/trending';
  return this.request(url, {}, succCb, errCb);
};