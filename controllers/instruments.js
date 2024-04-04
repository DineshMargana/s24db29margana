var instruments= require('../models/instruments');
// List of all food
exports.instruments_list = function(req, res) {
res.send('NOT IMPLEMENTED: instruments list');
};
// for a specific Dog.
exports.instruments_detail = function(req, res) {
res.send('NOT IMPLEMENTED: instruments detail: ' + req.params.id);
};
// Handle Dog create on POST.
exports.instruments_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: instruments create POST');
};
// Handle Dog delete from on DELETE.
exports.instruments_delete = function(req, res) {
res.send('NOT IMPLEMENTED: instruments delete DELETE ' + req.params.id);
};
// Handle Dog update form on PUT.
exports.instruments_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: instruments update PUT' + req.params.id);
};
 
 
exports.instruments_list = async function(req, res) {
    try{
    theinstruments = await instruments.find();
    res.send(theinstruments);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
 
exports.instruments_view_all_Page = async function(req, res) {
    try{
    theinstruments = await instruments.find();
    res.render('instruments', { title: 'instruments Search Results', results: theinstruments });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
 
    // Handle food create on POST.
exports.instruments_create_post = async function(req, res) {
    console.log(req.body)
    let document = new instruments();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Instrument_type = req.body.Instrument_type;
    document.Brand = req.body.Brand;
    document.Price = req.body.Price;
    
 
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };