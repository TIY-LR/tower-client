module.exports = function(app) {
  var express = require('express');
  var businessesRouter = express.Router();

  businessesRouter.get('/', function(req, res) {
    res.send({
      'businesses': []
    });
  });

  businessesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  businessesRouter.get('/:id', function(req, res) {
    res.send({
      'business': {
        id: req.params.id,
        name: ['laundromat', 'restaurant', 'amusement'][req.params.id % 3],
        upkeep: 1,
        initialCost: 1,
        supportedPop: 1,
        floorNumber: req.params.id,
        income: 2
      }
    });
  });

  businessesRouter.put('/:id', function(req, res) {
    res.send({
      'businesses': {
        id: req.params.id
      }
    });
  });

  businessesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/businesses', businessesRouter);
};
