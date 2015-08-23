module.exports = function(app) {
  var express = require('express');
  var apartmentsRouter = express.Router();

  apartmentsRouter.get('/', function(req, res) {
    res.send({
      'apartments': []
    });
  });

  apartmentsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  apartmentsRouter.get('/:id', function(req, res) {
    res.send({
      'apartment': {
        id: req.params.id,
        name: 'residence',
        upkeep: 1,
        initialCost: 1,
        supportedPop: 5,
        floorNumber: req.params.id,
      }
    });
  });

  apartmentsRouter.put('/:id', function(req, res) {
    res.send({
      'apartment': {
        id: req.params.id
      }
    });
  });

  apartmentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/apartments', apartmentsRouter);
};
