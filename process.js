const fs = require('fs')
var http = require('http');


http.createServer(function (req, res) {
  fs.readFile('main.txt', 'utf8', function(err, data) {
    console.log('fetching   ata');
    var dash = sdash(data) ;
    var ch = choix(dash);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    let table = '<style>table tr td {border:1px solid black;}</style><table>' , question ,questions;
questions = ch.split('##');
for (var i = 0; i < questions.length; i++) {
  question = questions[i].split('&&');
if (questions[i].length > 5) {
   table += '<tr><td>'+question[0]+'<br>'+question.length+' </td>';


table +=  '</tr>';

}
}
    res.write(table + '</table>');
    res.end();
  });
}).listen(8080);




function sdash(d) {
  return d.toString().replace(/\d+\)/gi, '##');
}


function choix(d) {
  return d.toString().replace(/[a-f]\./gi, '&&');
}
