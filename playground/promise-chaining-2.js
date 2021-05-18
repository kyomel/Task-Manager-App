require('../src/db/mongoose');
const { count } = require('../src/models/task');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('60a218d09d8a58ef7d79543f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((res) => {
//     console.log(res);
// }).catch((e) => {
//     console.log(e);
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;  
}

deleteTaskAndCount('60a217dd5e3175edffad0128').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})