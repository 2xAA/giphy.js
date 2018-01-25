// Search
// --
// path: /v1/gifs/search
// docs: https://developers.giphy.com/docs/#operation--gifs-search-get

export default function search(params, succCb, errCb) {
  let error;
  const parameters = Object.assign({}, params);

  let urlPiece = 'gifs/search';

  // Check for required parameters
  if ('q' in parameters) {
    urlPiece += `?q=${parameters.q}`;
    delete parameters.q;
  } else {
    error = 'giphy.js: No query.';
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
