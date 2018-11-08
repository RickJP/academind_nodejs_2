const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://apache:WZzCoSrDQiNVUQIg@cluster0-yo2fk.mongodb.net/test?retryWrites=true'
  )
    .then(client => {
      console.log('Connected');
      callback(client);
    })
    .catch(err => {
      console.log(err);
    }); 
};

module.exports = mongoConnect;





