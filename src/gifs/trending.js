// Trending GIFs
// --
// https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint

export default function translate(succCb, errCb) {
  const url = 'gifs/trending';
  this.request(url, {}, succCb, errCb);
};