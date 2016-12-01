const remote = require('electron').remote;
const fs = require('fs');
const picture = require('cat-picture');
const image = require('lightning-image-poly');
let src = picture.src;
picture.remove();
const viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

function save() {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, function (err, data) {
    fs.writeFile('annotation.pdf', data, function (err) {
      if(err) alert(`error generating pdf! ${err.message}`)
      else alert('pdf saved!')
    })
  })
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) save()
})
