const router = require('express').Router();

router.get('/',(req,res) => {
  res.send('Way too much, dude. Calm down.');
});

module.exports = router;