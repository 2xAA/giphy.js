// STICKER Search
// --
// https://github.com/Giphy/GiphyAPI#sticker-search-endpoint
stickers.prototype.search = function(params, succCb, errCb) {
  var self = this;
  var url = 'stickers/search';

  // Check for required parameters
  if('q' in params) {
    url += '?q=' + params.q;
    delete params.q;
  } else {
    var eMsg = 'giphy.js: No query.';
    if(errCb) errCb(eMsg);
    else console.error(eMsg);
  }

  self.request(url, params, succCb, errCb);
};