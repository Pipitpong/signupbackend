const express = require('express')
const router = express.Router()
const accountModel = require('../models/accountModel')

router.post('/login', async (req, res) => {
  // bababra...
})

router.post('/signup', async (req, res) => {
  const { fullName, username, email, password } = req.body //ส่งมาจาก front

  //เอาตัวที่มีโอกาสเกิด error ไว้ใน try try จะเป็นตัวส่งไปที่ front ว่าเกิด error
  try {
    //สิ่งที่จะเอาไปใส่ db
    const account = new accountModel({
      fullName,
      username,
      email,
      password,
    })

    //wait to save
    await account.save()
  } catch (error) {
    return res.json(error)
  }

  return res.json('acount created')
})

module.exports = router

//.json คือการแปลงเป็น json ก่อนส่งข้อมูล
