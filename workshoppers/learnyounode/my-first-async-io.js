var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename,{encoding: 'utf8'}, function(err, fileContents) {
    var totalLines = fileContents.split("\n").length -1; 
    console.log(totalLines);
});