import gifs from './gifs';
import stickers from './stickers';

class Giphy {
  constructor(key) {
    this.key = key;
    this.stickers.request = this.request.bind(this);
  }

  get apiVersion() { //eslint-disable-line
    return 1;
  }

  get url() {
    return `https://api.giphy.com/v${this.apiVersion}/`;
  }

  request({
    error,
    urlPiece,
    params,
    succCb,
    errCb,
  }) {
    return new Promise((resolve, reject) => {
      if (error) {
        reject(error);
        return;
      }

      let { url } = this;
      let hasStartingValue = false;

      url += urlPiece;

      // Check for starting '?'
      if (url.indexOf('?') > -1) hasStartingValue = true;

      Object.keys(params || {}).forEach((key) => {
        if (hasStartingValue) {
          url += `&${key}=${params[key]}`;
        } else {
          url += `?${key}=${params[key]}`;
          hasStartingValue = true;
        }
      });

      if (hasStartingValue) {
        url += `&api_key=${this.key}`;
      } else {
        url += `?api_key=${this.key}`;
      }

      const req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.responseType = 'json';
      req.onload = () => {
        const { status } = req;

        if (status === 200) {
          if (succCb) {
            succCb(req.response);
          }

          resolve(req.response);
        } else {
          if (errCb) {
            errCb(status);
          }

          reject(req.response);
        }
      };
      req.send();
    });
  }
}

Giphy.prototype.stickers = new stickers(); //eslint-disable-line

Object.keys(gifs).forEach((key) => {
  Giphy.prototype[key] = gifs[key];
});

export default Giphy;
