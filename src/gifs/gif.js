// Get GIF by ID
// --
// path: /v1/gifs/{gif_id}
// docs: https://developers.giphy.com/docs/#operation--gifs--gif_id--get

export default function gif(params, succCb, errCb) {
  let url = 'gifs?ids=';

  // Check for required parameters
  if('ids' in params) {
    params.ids.forEach((id, idx) => {
      url += id;
      if(idx + 1 !== params.ids.length) url += ',';
    });
    delete params.ids;
  } else {
    const eMsg = 'giphy.js: No IDs.';
    if(errCb) {
      errCb(eMsg);
    } else {
      console.error(eMsg);
    }
  }

  this.request(url, params, succCb, errCb);
};