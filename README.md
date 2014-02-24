Simple sequence generator for node+mongodb
--

[![Build Status](https://travis-ci.org/ogt/mongo-sequence.png)](https://travis-ci.org/ogt/mongo-sequence)

## Description
Implements the code described in http://docs.mongodb.org/manual/tutorial/create-an-auto-incrementing-field/
as a small nodejs module. 

Here is how to use it:
```
var mongoSequence = require('mongo-sequence');
var empseq = mongoSequence(db,'employees');

empseq.getNext(function(err,sequence) {
  if (!err) {
    db.employees.insert(
      {
        _id: sequence
        name: "Sarah C."
      }
    )
  }
}
```
I also use it with fiber promises and it looks nicer:
```
  var _ = require('glutils');
  //... within a fiber thread at this point
  if (!err) {
    db.employees.insert(
      {
        _id: _.p(empseq.getNext(_.p())),
        name: "Sarah C."
      }
    )
  }
  
```
A third parameter can also be passed as a hash with options. Sole option supported is 'coll' - if provided it refers to the collection name that should be used in the mongodb to holde the sequences.


## Installation 

Installing the module
```
npm install mongo-sequence
```
