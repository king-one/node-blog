const express = require('express')
const sha1 = require('sha1')
const path = require('path')
const fs = require('fs')
const router = express.Router()
const UserModel = require('../models/user')
const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup 注册页
router.get('/', checkNotLogin, function (req, res, next) {
  console.log('aaa');
  res.render('signup')
})

// POST /signup 用户注册
// router.post('/', checkNotLogin, function (req, res, next) {
//   const name = req.fields.name
//   let password = req.fields.password
//   const repassword = req.fields.repassword
//   try {
//     if (!(name.length >= 1 && name.length <= 10)) {
//       throw new Error('用户名1-10个字符')
//     }
//     if (password.length < 6) {
//       throw new Error('密码至少6个字符')
//     }
//     if (password.length > 20) {
//       throw new Error('密码最多20个字符')
//     }
//     if (password !== repassword) {
//       throw new Error('两次输入密码不一致')
//     }
//   } catch (e) {
//     req.flash('error', e.message)
//     return res.redirect('/signup')
//   }
//   // 加密
//   password = sha1(password)

//   // 入库
//   let user = {
//     name: name,
//     password: password,
//   }
//   UserModel.create(user).then(function (result) {
//     user = result.ops[0]
//     delete user.password
//     req.session.user = user;
//     req.flash('success', '注册成功')
//     res.redirect('/posts')
//   }).catch(function (e) {
//     if (e.message.match('duplicate key')) {
//       req.flash('error', '用户名已被占用')
//       return res.redirect('/signup')
//     }
//     next(e)
//   }
//   )
// })
module.exports = router