const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
    res.sendFile('/public/pages/admin/admin.html')
})

router.post('/admin/create', (req, res) => {
    const data = req.body

    res.send(data)
})

module.exports = router;