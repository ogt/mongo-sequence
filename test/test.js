var seq = require('../');
var test = require('tap').test;
var _ = require('glutils');

test('simple test', function (t) {
  _.run(function() {
    t.plan(4);
    var db = require('mongojs').connect('mongodb://localhost/mongo_sequence_test');
    _.p(db.dropDatabase(_.p()))
    var s1 = seq(db,'count1');
    var cnt = _.p(s1.getNext(_.p()));
    t.equal(cnt,1);
    var s2 = seq(db,'count2');
    var cnt = _.p(s2.getNext(_.p()));
    t.equal(cnt,1);
    cnt = _.p(s2.getNext(_.p()));
    t.equal(cnt,2);
    cnt = _.p(s1.getNext(_.p()));
    t.equal(cnt,2);
    t.end();
    db.close()
  });
});
