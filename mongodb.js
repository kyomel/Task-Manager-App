const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to database!')
    }
    
    const db= client.db(databaseName);

    db.collection('users').findOne({ name: 'Tukiyem' }, (err, user) => {
        if(err) {
            return console.log('Unable to fetch');
        }

        console.log(user);
    })

})