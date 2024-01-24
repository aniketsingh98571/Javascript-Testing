var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{name:"ANiket",completed:false}]);
});
router.get("/:id",function(req,res,next){
  res.json({name:"ANiket",completed:false})
})
router.post("/add",function(req,res,next){
  res.json({name:"ANiket",completed:false})
})

module.exports = router;
