require('../src/db/mongoose');
const e = require('express');
const User = require('../src/models/user');


User.findByIdAndUpdate('60a1f304397223affd3437b0', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1})
}).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count
}

updateAgeAndCount('60a1f304397223affd3437b0', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e);
})