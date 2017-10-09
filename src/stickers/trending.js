// STICKER Trending
// --
// https://github.com/Giphy/GiphyAPI#sticker-trending-endpoint
stickers.prototype.trending = function(params, succCb, errCb) {
  var self = this;
  var url = 'stickers/trending';

  // Check for required parameters
  if('s' in params) {
    url += '?s=' + params.s;
    delete params.s;
  } else {
    var eMsg = 'giphy.js: No query.';
    if(errCb) errCb(eMsg);
    else console.error(eMsg);
  }

  self.request(url, params, succCb, errCb);
};