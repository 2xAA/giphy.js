// STICKER API
// --
// docs: https://developers.giphy.com/docs/#giphy-sticker-api

import random from './random';
import search from './search';
import translate from './translate';
import trending from './trending';

class stickers {

}

stickers.prototype.random = random;
stickers.prototype.search = search;
stickers.prototype.translate = translate;
stickers.prototype.trending = trending;

export default stickers;
