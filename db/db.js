const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/studentsAPI")
.then(()=>{
    console.log('Connected')
}).catch(err =>{
    console.log(err);
})

// module.exports = mongoose;