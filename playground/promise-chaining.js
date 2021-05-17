require('../src/db/mongoose');
const User = require('../src/models/user');


User.findByIdAndUpdate('60a1f304397223affd3437b0', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1})
}).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})


