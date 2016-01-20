# Giphy.js

Giphy.js is an easy to use JavaScript wrapper for the [Giphy API](https://github.com/Giphy/GiphyAPI).

Please refer to [Giphy's API documentation](https://github.com/Giphy/GiphyAPI) for API usage as this JavaScript library follows it exactly at the time of last commit.

## Usage

Include giphy.min.js on your page. Create a new instance of giphy.js and initialise it with an API key **(do not use the example key seen here provided by giphy in production)**.

```JavaScript
var giphy = new Giphy('dc6zaTOxFJmzC');
```

## Methods with example objects

In all examples, ```success``` and ```error``` are callback functions.

Please see the ```example.html``` or the [GitHub Pages site](http://2xaa.github.io/giphy.js/) for a working example.

### Gif API

Search: [https://github.com/Giphy/GiphyAPI#search-endpont](https://github.com/Giphy/GiphyAPI#search-endpont)

```JavaScript
giphy.search({
	q: 'chiptune',
	offset: 0,
	rating: 'c',
	fmt: 'json',
	'limit': 10
},
success,
error);
```

Get GIF by ID: [https://github.com/Giphy/GiphyAPI#get-gifs-by-id-endpoint](https://github.com/Giphy/GiphyAPI#get-gifs-by-id-endpoint)

```JavaScript
giphy.gif({
	id: 'xTiTnhJJ6xg5e1FgD6',
	rating: 'c',
	fmt: 'json'
},
success,
error);
```

Get GIFs by ID: [https://github.com/Giphy/GiphyAPI#get-gif-by-id-endpoint](https://github.com/Giphy/GiphyAPI#get-gif-by-id-endpoint)

```JavaScript
giphy.gifs({
	ids: [
		'xTiTnhJJ6xg5e1FgD6',
		'xTiTnmMja0SoALNSpO'
	],
	rating: 'c',
	fmt: 'json'
},
success,
error);
```

Translate: [https://github.com/Giphy/GiphyAPI#translate-endpoint](https://github.com/Giphy/GiphyAPI#translate-endpoint)

```JavaScript
giphy.translate({
	s: 'good job',
	rating: 'c',
	fmt: 'json'	
},
success,
error);
```

Random: [https://github.com/Giphy/GiphyAPI#random-endpoint](https://github.com/Giphy/GiphyAPI#random-endpoint)

```JavaScript
giphy.random({
	rating: 'c',
	fmt: 'json',
	tag: 'chiptune'
},
success,
error);
```

Trending GIFs: [https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint](https://github.com/Giphy/GiphyAPI#trending-gifs-endpoint)

```JavaScript
giphy.trending(success, error);
```

### Sticker API

STICKER Search: [https://github.com/Giphy/GiphyAPI#sticker-search-endpoint](https://github.com/Giphy/GiphyAPI#sticker-search-endpoint)

```JavaScript
giphy.stickers.search({
	q: 'chiptune',
	limit: 10,
	offset: 0,
	rating: 'c',
	fmt: 'json'
},
success,
error);
```

STICKER Roulette (Random): [https://github.com/Giphy/GiphyAPI#sticker-roulette-random-endpoint](https://github.com/Giphy/GiphyAPI#sticker-roulette-random-endpoint)

```JavaScript
giphy.stickers.roulette({
	q: 'chiptune',
	rating: 'c',
	fmt: 'json'
},
success,
error);
```

STICKER Trending: [https://github.com/Giphy/GiphyAPI#sticker-trending-endpoint](https://github.com/Giphy/GiphyAPI#sticker-trending-endpoint)

```JavaScript
giphy.stickers.trending({
	s: 'chiptune',
	limit: 10,
	offset: 0,
	rating: 'c',
	fmt: 'json'
},
success,
error);
```

STICKER Translate: [https://github.com/Giphy/GiphyAPI#sticker-translate-endpoint](https://github.com/Giphy/GiphyAPI#sticker-translate-endpoint)

```JavaScript
giphy.stickers.translate({
	s: 'good job',
	rating: 'c',
	fmt: 'json'
},
success,
error);
```
