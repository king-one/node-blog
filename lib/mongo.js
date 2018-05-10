const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)
// 根据id生成时间戳
mongolass.plugin('addCreateAt', {
    afterFind: function (results) {
        results.forEach(function (item) {
            item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm')
        })
        return results
    },
    afterFindOne: function (result) {
        if (result) {
            result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm')
        }
        return result
    }
})
// 用户模型
exports.User = mongolass.model('User', {
    name: {
        type: 'string',
        require: true
    },
    password: {
        type: 'string',
        require: true
    }
})
exports.User.index({ name: 1 }, { unique: true }).exec();

exports.Post = mongolass.model('Post', {
    author: { type: Mongolass.Types.ObjectId, required: true },
    title: { type: 'string', required: true },
    content: { type: 'string', required: true },
    pv: { type: 'number', default: 0 }
  })
exports.Post.index({ author: 1, _id: -1 }).exec()// 按创建时间降序查看用户的文章列表