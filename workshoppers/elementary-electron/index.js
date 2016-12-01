const picture = require('cat-picture');
const image = require('lightning-image-poly');
let src = picture.src;
picture.remove();
const viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});
