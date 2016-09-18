var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extname, callback) {
    fs.readdir(dirname, function(err, files) {
        if(err)
           return callback(err);
        
        var filteredFiles = files.filter(function(file) {
            //console.log(file,extname,path.extname(file));
            return path.extname(file) == '.' + extname;
        });

        callback(null, filteredFiles);
    })    
}