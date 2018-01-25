// STICKER Translate
// --
// path: /v1/stickers/translate
// docs: https://developers.giphy.com/docs/#operation--stickers-translate-get

export default function translate(params, succCb, errCb) {
  let error;
  const parameters = Object.assign({}, params);

  let urlPiece = 'stickers/translate';

  // Check for required parameters
  if ('s' in parameters) {
    urlPiece += `?s=${parameters.s.replace(' ', '+')}`;
    delete parameters.s;
  } else {
    error = 'giphy.js: No query.';
    if (error) {
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
