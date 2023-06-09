const express = require('express');
const router = express.Router();
const backstockController = require('../controllers/backstock');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, backstockController.getBackstock);
router.get('/add', ensureAuth, backstockController.add);
router.get('/edit/:id', ensureAuth, backstockController.edit);
router.put('/:id', ensureAuth, backstockController.update);
router.post('/createBackstock', ensureAuth, backstockController.createBackstock);
router.delete('/deleteBackstock/:id', ensureAuth, backstockController.deleteBackstock);

module.exports = router;
