const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const pkg = require('./package')
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs') //设置模板引擎 ejs
// 设置模板全局常量
app.locals.blog = {
  title: pkg.name,
  description: pkg.description
}
app.use(session())
// 添加模板必需的三个变量
app.use(function (req, res, next) {
  res.locals.user = req.session.user
  res.locals.success = req.flash('success').toString()
  res.locals.error = req.flash('error').toString()
  next()
})
app.use('/',indexRouter)
app.use('/users',userRouter)
app.listen(3100)