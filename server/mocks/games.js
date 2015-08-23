module.exports = function(app) {
  var express = require('express');
  var gamesRouter = express.Router();

  gamesRouter.get('/', function(req, res) {
    res.send({
      'games': []
    });
  });

  gamesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  gamesRouter.get('/:id', function(req, res) {
    res.send({
      'game': {
        id: req.params.id,
        periodicRevenue: 0,
        totalBalance: 5,
        structures: [
          {type: 'apartment', id: 1},
          {type: 'business', id: 1}
        ]
      }
    });
  });

  gamesRouter.put('/:id', function(req, res) {
    res.send({
      'games': {
        id: req.params.id
      }
    });
  });

  gamesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/games', gamesRouter);
};
