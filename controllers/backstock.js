const Backstock = require('../models/Backstock');
const dayjs = require('dayjs');

module.exports = {
  getBackstock: async (req, res) => {
    console.log(req.user);
    try {
      const backstockItems = await Backstock.find({ userId: req.user.id });
      for (let i = 0; i < backstockItems.length; i++) {
        backstockItems[i].displayExpirationDate = dayjs(backstockItems[i].expirationDate || '2005-01-01').format('MM/DD/YYYY');
        backstockItems[i].expiredClass = dayjs(backstockItems[i].expirationDate).isBefore(dayjs()) ? 'expired' : '';
      }
      res.render('backstock.ejs', {
        backstockItems: backstockItems,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  add: async (req, res) => {
    res.render('add.ejs');
  },
  edit: async (req, res) => {
    try {
      const item = await Backstock.findById(req.params.id);
      res.render('edit.ejs', { item: item, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  update: async (req, res) => {
    try {
      await Backstock.findOneAndUpdate({ _id: req.params.id }, req.body);
      console.log('Updated Backstock Item');
      res.redirect(`/backstock`);
    } catch (err) {
      console.log(err);
    }
  },
  createBackstock: async (req, res) => {
    try {
      await Backstock.create({
        category: req.body.category,
        brand: req.body.brand,
        description: req.body.description,
        storageLocation: req.body.storageLocation,
        quantity: req.body.quantity,
        idealQuantity: req.body.idealQuantity,
        size: req.body.size,
        expirationDate: req.body.expirationDate,
        comments: req.body.comments,
        userId: req.user.id,
      });
      console.log('Backstock item has been added!');
      res.redirect('/backstock');
    } catch (err) {
      console.log(err);
    }
  },
  deleteBackstock: async (req, res) => {
    try {
      // Find item by id
      let post = await Backstock.findById({ _id: req.params.id });
      // Delete item from db
      await Backstock.remove({ _id: req.params.id });
      console.log('Deleted Backstock item');
      res.redirect('/backstock');
    } catch (err) {
      res.redirect('/backstock');
    }
  },
};
