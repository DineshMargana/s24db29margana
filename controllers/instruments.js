
var instruments = require('../models/instruments');
// List of all instruments
exports.instruments_list = function(req, res) {
 res.send('NOT IMPLEMENTED: instruments list');
};
// for a specific instruments.
exports.instruments_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await instruments.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle instruments create on POST.
exports.instruments_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: instruments create POST');
};
// Handle instruments delete from on DELETE.
exports.instruments_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: instruments delete DELETE ' + req.params.id);
};
// Handle instruments update form on PUT.
exports.instruments_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Costume.findById( req.params.id)
// Do updates of properties
if(req.body.instruments_type)
toUpdate.instruments_type = req.body.costume_type;
if(req.body.instruments_size) toUpdate.cost = req.body.instruments_size;
if(req.body.instruments_price) toUpdate.size = req.body.instruments_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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


    // Handle instruments create on POST.
exports.instruments_create_post = async function(req, res) {
    console.log(req.body)
    let document = new instruments();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.instrument_type = req.body.instrument_type;
    document.brand = req.body.brand;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle instruments delete on DELETE.
exports.instruments_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await instruments.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

exports.instruments_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await instruments.findById( req.query.id)
    res.render('instrumentsdetail',
    { title: 'instruments Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    exports.instruments_create_Page = function(req, res) {
        console.log("create view")
        try{
        res.render('instrumentscreate', { title: 'instruments Create'});
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
        };

//Handle building the view for updating a costume.
// query provides the id
exports.instruments_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await instruments.findById(req.query.id)
res.render('instrumentsupdate', { title: 'instruments Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
}