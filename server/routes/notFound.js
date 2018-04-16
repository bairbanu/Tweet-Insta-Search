const express = require('express')
const router = express.Router()

router.get('*', (req, res) => {
    res.status(404).send('Page does not exists')
})

module.exports = router