var db = require('mongojs').connect('mongodb://localhost/mongo_sequence_test');
var seq = require('../')(db,'testseq1');
seq.getNext(function(err,no) { console.log(no); });
seq.getNext(function(err,no) { console.log(no); });
seq.getNext(function(err,no) { console.log(no); });