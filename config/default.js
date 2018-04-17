module.exports ={
    port:3100,
    session:{
        secret:"node-blog",
        key:"node-blog",
        maxAge:2392000000  // 过期时间1个月
    },
    mongodb: 'mongodb://localhost:27017/nodeBlog'
}