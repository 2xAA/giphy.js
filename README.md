# Giphy.js

Giphy.js is a JavaScript wrapper for the [Giphy API](https://developers.giphy.com/docs/).

Please refer to [Giphy's API documentation](https://developers.giphy.com/docs/) for API usage as this JavaScript library follows it exactly at the time of last commit.

## Usage

giphy.js is exported as an [UMD](https://github.com/umdjs/umd).

Install from npm:

```JavaScript
npm install giphy.js

// or with yarn

yarn add giphy.js
```

Import using one of these methods:

```JavaScript
import Giphy from 'giphy.js';
```
or  
```JavaScript
const Giphy = require('giphy.js');
```

To import Giphy.js in web, you can:  
```HTML
<script src='giphy.js'></script>
```  
and access using  
```JavaScript
window.Giphy
```

Then initialise with an API key:
```JavaScript
const giphy = new Giphy('dc6zaTOxFJmzC');
```

**(do not use the example key seen here provided by giphy in production)**.

## Endpoint methods with example objects

In all examples, endpoint methods return a Promise. However, they can also accept two additional arguments for ```success``` and ```error``` callback functions -  e.g.

```JavaScript
giphy.random({
  rating: 'y',
  fmt: 'json',
  tag: 'chiptune'
},
(response) => {
  console.log(response);
},
(error) => {
  console.error(error);
});
```

Please see the example page by running ```npm run dev```or the [GitHub Pages site](http://2xaa.github.io/giphy.js/) for a working example.

### Gif API

Search: [https://developers.giphy.com/docs/#operation--gifs-search-get](https://developers.giphy.com/docs/#operation--gifs-search-get)

```JavaScript
giphy.search({
  q: 'chiptune',
  offset: 0,
  rating: 'y',
  fmt: 'json',
  limit: 10
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

Get GIF by ID: [https://developers.giphy.com/docs/#operation--gifs--gif_id--get](https://developers.giphy.com/docs/#operation--gifs--gif_id--get)

```JavaScript
giphy.gif({
  id: 'xTiTnhJJ6xg5e1FgD6',
  rating: 'y',
  fmt: 'json'
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

Get GIFs by ID: [https://developers.giphy.com/docs/#operation--gifs-get](https://developers.giphy.com/docs/#operation--gifs-get)

```JavaScript
giphy.gifs({
  ids: [
    'xTiTnhJJ6xg5e1FgD6',
    'xTiTnmMja0SoALNSpO'
  ],
  rating: 'y',
  fmt: 'json'
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

Translate: [https://developers.giphy.com/docs/#operation--gifs-translate-get](https://developers.giphy.com/docs/#operation--gifs-translate-get)

```JavaScript
giphy.translate({
  s: 'good job',
  rating: 'y',
  fmt: 'json'
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

Random: [https://developers.giphy.com/docs/#operation--gifs-random-get](https://developers.giphy.com/docs/#operation--gifs-random-get)

```JavaScript
giphy.random({
  rating: 'y',
  fmt: 'json',
  tag: 'chiptune'
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

Trending GIFs: [https://developers.giphy.com/docs/#operation--gifs-trending-get](https://developers.giphy.com/docs/#operation--gifs-trending-get)

```JavaScript
giphy.trending(success, error)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

### Sticker API

STICKER Random (formerly Roulette): [https://developers.giphy.com/docs/#operation--stickers-random-get](https://developers.giphy.com/docs/#operation--stickers-random-get)

```JavaScript
giphy.stickers.random({
  q: 'chiptune',
  rating: 'y',
  fmt: 'json'
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

STICKER Search: [https://developers.giphy.com/docs/#operation--stickers-search-get](https://developers.giphy.com/docs/#operation--stickers-search-get)

```JavaScript
giphy.stickers.search({
  q: 'chiptune',
  limit: 10,
  offset: 0,
  rating: 'y',
  fmt: 'json'
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

STICKER Translate: [https://developers.giphy.com/docs/#operation--stickers-translate-get](https://developers.giphy.com/docs/#operation--stickers-translate-get)

```JavaScript
giphy.stickers.translate({
  s: 'good job',
  rating: 'y',
  fmt: 'json'
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

STICKER Trending: [https://developers.giphy.com/docs/#operation--stickers-trending-get](https://developers.giphy.com/docs/#operation--stickers-trending-get)

```JavaScript
giphy.stickers.trending({
  s: 'chiptune',
  limit: 10,
  offset: 0,
  rating: 'y',
  fmt: 'json'
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

## Build instructions
```Bash
# install dependencies
npm i # yarn

# serve with hot reload at localhost:8080
npm run dev # yarn run dev

# build for production with minification
npm run build # yarn run build
```