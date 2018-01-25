// Get GIF by ID
// --
// path: /v1/gifs/{gif_id}
// docs: https://developers.giphy.com/docs/#operation--gifs--gif_id--get

export default function gif(params, succCb, errCb) {
  let error;
  const parameters = Object.assign({}, params);

  let urlPiece = 'gifs?ids=';

  // Check for required parameters
  if ('id' in parameters) {
    urlPiece += parameters.id;
    delete parameters.id;
  } else {
    error = 'giphy.js: No ID.';
    if (errCb) {
      errCb(error);
    }
  }

  return this.request({
    error,
    urlPiece,
    parameters,
    succCb,
    errCb,
  });
}
