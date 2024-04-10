var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var instruments_controller = require('../controllers/instruments');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// instrument ROUTES ///
// POST request for creating a instrument.
router.post('/instruments', instruments_controller.instruments_create_post);
// DELETE request to delete instrument.
router.delete('/instruments/:id', instruments_controller.instruments_delete);
// PUT request to update instrument.
router.put('/instruments/:id', instruments_controller.instruments_update_put);
// GET request for one instrument.
router.get('/instruments/:id', instruments_controller.instruments_detail);
// GET request for list of all instrument items.
router.get('/instruments', instruments_controller.instruments_list);
module.exports = router;