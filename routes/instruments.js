var express = require('express');
const instruments_controlers= require('../controllers/instruments');
var router = express.Router();
/* GET instruments */
 
router.get('/', instruments_controlers.instruments_view_all_Page);
 
router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })
router.get('/', instruments_controlers.instruments_delete );
/* GET detail instruments page */
router.get('/detail', instruments_controlers.instruments_view_one_Page);

/* GET create costume page */
router.get('/create', instruments_controlers.instruments_create_Page);

router.get('/update', instruments_controlers.instruments_update_Page);

router.get('/delete', instruments_controlers.instruments_delete_Page);
module.exports = router;