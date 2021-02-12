const express = require('express')
const router = express.Router()
const accountModel = require('../models/accountModel')

// :id คือ ตัวแปร
router.get('/profile/:id', async (req, res) => {
  const { id } = req.params // เอา id ออกมาจาก endpoint
  try {
    const account = await accountModel.findById(id).select({ password: false })
    return res.json(account)
  } catch (error) {
    return res.json(error)
  }
})
module.exports = router
