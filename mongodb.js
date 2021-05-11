const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to database!')
    }
    
    const db= client.db(databaseName);

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((res) => {
        console.log(res.modifiedCount);
    }).catch((err) => {
        console.log(err);
    })
})