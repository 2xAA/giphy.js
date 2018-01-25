// Get GIFs by ID
// --
// path: /v1/gifs
// docs: https://developers.giphy.com/docs/#operation--gifs-get

export default function gifs(params, succCb, errCb) {
  let error;
  const parameters = Object.assign({}, params);

  let urlPiece = 'gifs?ids=';

  // Check for required parameters
  if ('ids' in parameters) {
    parameters.ids.forEach((id, idx) => {
      urlPiece += id;
      if (idx + 1 !== parameters.ids.length) {
        urlPiece += ',';
      }
    });
    delete parameters.ids;
  } else {
    error = 'giphy.js: No IDs.';
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
