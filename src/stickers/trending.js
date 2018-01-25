// STICKER Trending
// --
// path: /v1/stickers/trending
// docs: https://developers.giphy.com/docs/#operation--stickers-trending-get

export default function trending(succCb, errCb) {
  const urlPiece = 'stickers/trending';
  return this.request({
    urlPiece,
    succCb,
    errCb,
  });
}
