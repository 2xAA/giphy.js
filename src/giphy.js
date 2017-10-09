import gifs from './gifs';

class giphy {
  constructor(key) {
    this.key = key;
    this.apiVersion = 1;
  }

  static url() {
    return `https://api.giphy.com/v${this.apiVersion}/`;
  }

  // Request
  request(urlParams, params, succCb, errCb) {
    let url = this.url;
    let hasStartingValue = false;

    url += urlParams;

    // Check for starting '?'
    if(url.indexOf('?') > -1) hasStartingValue = true;

    for(let key in params) {
      if(hasStartingValue) {
        url += '&' + key + '=' + params[key];
      } else {
        url += '?' + key + '=' + params[key];
        hasStartingValue = true;
      }
    }

    if(hasStartingValue) {
      url += '&api_key=' + this.key;
    } else {
      url += '?api_key=' + this.key;
    }

    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'json';
    req.onload = () => {
      const status = req.status;

      if (status == 200) {
        if(succCb) {
          succCb(req.response);
        }
      } else {
        if(errCb) {
          errCb(status);
        } else {
          console.log(status);
        }
      }
    };
    req.send();

    return url;
  };
};

Object.keys(gifs).forEach(key => {
  giphy.prototype[key] = gifs[key];
});

export default giphy;