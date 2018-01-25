// STICKER Search
// --
// path: /v1/stickers/search
// docs: https://developers.giphy.com/docs/#operation--stickers-search-get

export default function search(params, succCb, errCb) {
  let error;
  const parameters = Object.assign({}, params);

  let urlPiece = 'stickers/search';

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
