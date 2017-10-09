import giphy from './giphy/';

// Trending GIFs
// --
// https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint
giphy.prototype.trending = function(succCb, errCb) {
  var self = this;
  var url = 'gifs/trending';

  self.request(url, {}, succCb, errCb);
};

// STICKER API
// --
// https://github.com/Giphy/GiphyAPI#giphy-sticker-api
var stickers = function() {
  console.log(this);
};

stickers.prototype = giphy.prototype;

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

// STICKER Translate
// --
// https://github.com/Giphy/GiphyAPI#sticker-translate-endpoint
stickers.prototype.translate = function(params, succCb, errCb) {
  var self = this;
  var url = 'stickers/translate';

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

// Request
giphy.prototype.request = function(urlParams, params, succCb, errCb) {
  var self = this;
  var url = self.url;
  var hasStartingValue = false;

  url += urlParams;

  // Check for starting '?'
  if(url.indexOf('?') > -1) hasStartingValue = true;

  for(var key in params) {
    if(hasStartingValue) {
      url += '&' + key + '=' + params[key];
    } else {
      url += '?' + key + '=' + params[key];
      hasStartingValue = true;
    }
  }

  if(hasStartingValue) {
    url += '&api_key=' + self.key;
  } else {
    url += '?api_key=' + self.key;
  }

  console.log(url);

  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "json";
  req.onload = function () {
    var status = req.status;
    if (status == 200) {

      if(succCb) succCb(req.response);

    } else {
      if(errCb) errCb(status);
      else console.log(status);
    }
  };
  req.send();

  return url;
};

giphy.prototype.stickers = new stickers();

export default giphy;