const { Sfhard } = require('../models/sfhard.model'); //change this line
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// Create something 
// Change the lines below 
module.exports.createSfhard = (request, response) => {
    const { title, cal, price, description, imgUrl, isGlutenFree, isSugarFree, isTasty } = request.body;
    Sfhard.create({
        title,
        cal,
        price,
        description,
        imgUrl,
        isGlutenFree,
        isSugarFree,
        isTasty
    })
        .then(sfhard => response.json(sfhard))
        .catch(err => response.status(400).json(err)); // Altered for validations
}

// Retrieve all from database 
// Change the lines below 
module.exports.getAllSfhards = (request, response) => {
    Sfhard.find({})
        .then(sfhards => response.json(sfhards))
        .catch(err => response.json(err))
}

// Retrieve one from database
// Change the lines below
module.exports.getSfhard = (request, response) => {
    Sfhard.findOne({_id:request.params._id})
        .then(sfhard => response.json(sfhard))
        .catch(err => response.json(err))
}

// Update one from database
// Change the lines below
module.exports.updateSfhard = (request, response) => {
    // runValidators is needed for persisting validations
    Sfhard.findOneAndUpdate({_id: request.params._id}, request.body, {runValidators:true, new:true}) 
        .then(updatedSfhard => response.json(updatedSfhard))
        .catch(err => response.status(400).json(err)); // Altered for validations
}

// Delete one from database
// Change the lines below
module.exports.deleteSfhard = (request, response) => {
    Sfhard.deleteOne({ _id: request.params._id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}