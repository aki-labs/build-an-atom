/* eslint-disable */
const img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,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';
export default img;