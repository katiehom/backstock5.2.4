const express = require('express')
const router = express.Router()
const restockController = require('../controllers/restock') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, restockController.getRestock)
router.get('/addRestock', ensureAuth, restockController.addRestock)
router.get('/editRestock/:id', ensureAuth, restockController.editRestock)
router.put('/:id', ensureAuth, restockController.updateRestock)
router.put('/increaseRestock/:id', ensureAuth, restockController.increaseRestock)
router.put('/decreaseRestock/:id', ensureAuth, restockController.decreaseRestock)
router.post('/createRestock', ensureAuth, restockController.createRestock)
router.post('/exportRestock', ensureAuth, restockController.exportRestock)
router.delete('/deleteRestock/:id', ensureAuth, restockController.deleteRestock)

module.exports = router

// add ensureAuth to all routes