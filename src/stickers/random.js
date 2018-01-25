// STICKER Roulette (Random)
// --
// path: /v1/stickers/random
// docs: https://developers.giphy.com/docs/#operation--stickers-random-get

export default function random(params, succCb, errCb) {
  const parameters = Object.assign({}, params);

  let urlPiece = 'stickers/random';

  // Check for required parameters
  if ('tag' in parameters) {
    urlPiece += `?tag=${parameters.tag}`;
    delete parameters.tag;
  }

  return this.request({
    urlPiece,
    parameters,
    succCb,
    errCb,
  });
}
