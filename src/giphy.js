import gifs from './gifs';

class giphy {
  constructor(key) {
    this.key = key;
    this.apiVersion = 1;
    this.url = `https://api.giphy.com/v${this.apiVersion}/`;
  }
};

Object.keys(gifs).forEach(key => {
  giphy.prototype[key] = gifs[key];
});

export default giphy;