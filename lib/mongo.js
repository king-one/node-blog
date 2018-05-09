const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)
// 用户模型
exports.User = mongolass.model('User',{
    name:{
        type:'string',
        require:true
    },
    password:{
        type:'string',
        require:true
    }
})
exports.User.index({name:1},{unique:true}).exec();