var fs = require('fs');

var filename = process.argv[2];

var buf = fs.readFileSync(filename);
var str = buf.toString();

/**
 * Também é possível que readFileSync retorne diretamente uma string. Para isso deve informar a opção encoding: 'utf-8'
 * no parametro options.
 */

var totalNewLine = str.split("\n");

console.log(totalNewLine.length -1);