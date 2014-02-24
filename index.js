module.exports = function(db,name,opts) {
  var seq = {
    db : db,
    name : name,
    opts : opts
  };
  seq.getNext = function(cb) {
    function mycb(err,el) { if (err) {cb(err) } else {cb(null,el.sequence)} };
    var collection = db.collection(seq.opts && seq.opts.collname ? seq.opts.collname : 'counters');
    collection.findAndModify({
      query: { _id: name },
      update: { $inc: { sequence: 1 } },
      new: true,
      upsert : true
    }, function(err,obj) {
      if (err) {
        cb(err)
      }
      else {
        cb(null,obj.sequence)
      } 
    });
  }
  return seq;
}
