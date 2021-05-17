const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to database!')
    }
    
    const db= client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age: 24
    // }).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // })

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

})