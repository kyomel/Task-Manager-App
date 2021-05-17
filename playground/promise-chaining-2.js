require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('60a218d09d8a58ef7d79543f').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})
