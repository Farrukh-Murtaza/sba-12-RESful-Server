const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
  res.send('GET request to the movies')
});

router.post('/', (req,res) => {
    res.send('POST request to the movies')
})

module.exports = router;