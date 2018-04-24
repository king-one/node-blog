const config = require('config-lite')(__dirname)
const Mogolass = require('mongolass')
const mogolass = new Mogolass()
// 用户模型
exports.user = mongolass.model('User',{
    name:{
        type:'string',
        require:true
    },
    passoword:{
        type:'string',require:true
    },
    avatar:{
        type:'string',require:true
    },
    gender:{
        type: 'string', 
        enum: ['m', 'f', 'x'], 
        default: 'x' 
    },
    bio: { type: 'string', required: true }
})
exports.User.index({
    name:1},
    {unique:true}
).exec();