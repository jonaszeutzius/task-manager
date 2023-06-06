require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('647cd73420b0280e046e8321', { age:1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments( {age })
    return count
}

updateAgeAndCount('647cd73420b0280e046e8321', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(eO)
})