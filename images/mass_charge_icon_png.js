/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;