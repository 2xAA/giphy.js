// STICKER Roulette (Random)
// --
// https://github.com/Giphy/GiphyAPI#sticker-roulette-random-endpoint
stickers.prototype.roulette = function(params, succCb, errCb) {
  var self = this;
  var url = 'stickers/roulette';

  // Check for required parameters
  if('tag' in params) {
    url += '?tag=' + params.tag;
    delete params.tag;
  } else {
    var eMsg = 'giphy.js: No query.';
    if(errCb) errCb(eMsg);
    else console.error(eMsg);
  }

  self.request(url, params, succCb, errCb);
};