const express = require('express');
const router = express.Router();

router.get('/',(req,res, next) => {
  res.status(200).json({
    message: "Handling Todo Get request"
  });
});

router.post('/',(req,res, next) => {
  res.status(200).json({
    message: "Handling Todo Post request"
  });
});

router.put('/',(req,res, next) => {
  res.status(200).json({
    message: "Handling Todo Update request"
  });
});

router.delete('/',(req,res, next) => {
  res.status(200).json({
    message: "Handling Todo Delete request"
  });
});

module.exports = router;
