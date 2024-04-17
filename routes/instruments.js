var express = require('express');
var passport = require('passport');
const instruments_controlers = require('../controllers/instruments');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET instruments */

router.get('/', instruments_controlers.instruments_view_all_Page);

router.put('/', function (req, res) {
    if (req.body.checkboxsale) toUpdate.sale = true;
    else toUpdate.same = false;
})
router.get('/', instruments_controlers.instruments_delete);
/* GET detail instruments page */
router.get('/detail', instruments_controlers.instruments_view_one_Page);

/* GET create costume page */
router.get('/create', instruments_controlers.instruments_create_Page);

router.get('/update', secured, instruments_controlers.instruments_update_Page);
router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});



router.get('/delete', instruments_controlers.instruments_delete_Page);
module.exports = router;