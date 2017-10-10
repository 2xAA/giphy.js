// Get GIF by ID
// --
// path: /v1/gifs/{gif_id}
// docs: https://developers.giphy.com/docs/#operation--gifs--gif_id--get

export default function gif(params, succCb, errCb) {
  let url = 'gifs?ids=';

  // Check for required parameters
  if('id' in params) {
    url += params.id;
    delete params.id;
  } else {
    const eMsg = 'giphy.js: No ID.';
    if(errCb) {
      errCb(eMsg);
    } else {
      console.error(eMsg);
    }
  }

  return this.request(url, params, succCb, errCb);
}