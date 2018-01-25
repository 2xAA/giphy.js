// Random
// --
// path: /v1/gifs/random
// docs: https://developers.giphy.com/docs/#operation--gifs-random-get

export default function random(params, succCb, errCb) {
  const parameters = Object.assign({}, params);

  let urlPiece = 'gifs/random';

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
