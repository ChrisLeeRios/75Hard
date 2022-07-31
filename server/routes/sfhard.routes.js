// Change lines below 
const SfhardController = require('../controllers/sfhard.controller');
module.exports = function(app){
    app.get('/api', SfhardController.index);
    app.post('/api/sfhards', SfhardController.createSfhard);
    app.get('/api/sfhards', SfhardController.getAllSfhards);
    app.get('/api/sfhards/:_id', SfhardController.getSfhard);
    app.put('/api/sfhards/:_id', SfhardController.updateSfhard);
    app.delete('/api/sfhards/:_id', SfhardController.deleteSfhard);
}
