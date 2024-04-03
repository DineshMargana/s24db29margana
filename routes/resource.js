var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var instruments_controller = require('../controllers/instruments');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// food ROUTES ///
// POST request for creating a food.
router.post('/instruments', instruments_controller.instruments_create_post);
// DELETE request to delete food.
router.delete('/instruments/:id', instruments_controller.instruments_delete);
// PUT request to update food.
router.put('/instruments/:id', instruments_controller.instruments_update_put);
// GET request for one food.
router.get('/instruments/:id', instruments_controller.food_detail);
// GET request for list of all food items.
router.get('/instruments', instruments_controller.instruments_list);
module.exports = router;