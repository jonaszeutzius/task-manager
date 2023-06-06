require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('647cdfcdf6fe894974a12a9f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( {completed: false} )
    return count
}

deleteTaskAndCount('647d145fb6ecb057049004fe').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})