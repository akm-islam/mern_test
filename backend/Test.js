var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://akm:Ma%40142566@3.140.216.86:27017/cool_db';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("cool_db");
  var query = { Month: "March",scoresSubjectivity: 0 };
  dbo.collection("march").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});