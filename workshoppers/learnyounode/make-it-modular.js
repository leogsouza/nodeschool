var filtered = require('./filtered-ls-module.js');

var directory = process.argv[2];
var extname = process.argv[3];

filtered(directory, extname, function(err, data) {
    if(err){
        console.log('An error occurred', err);
        return err;
    }
        
    
    data.forEach(function(element) {
        console.log(element);
    }, this);
})