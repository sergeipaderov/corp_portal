const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


const usersCtrl = require('../controllers/user');

router.post('/api/saveNewUser', async (req, res) => {
  console.log(req.body); 
  // try {
   
  //   const result = await usersCtrl.add({ ...req.body });
  //   res.json({
  //     data: result
  //   });
  // }
  // catch (err) {
  //   console.log(err, res);
  // }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const result = await usersCtrl.get({ ...req.params });
//     res.json({
//       data: result
//     });
//   }
//   catch (err) {
//     errorHandler(err, res);
//   }
// });

// router.put('/:id', async (req, res) => {
//   try {
//     const result = await usersCtrl.update({ ...req.params, ...req.body });
//     res.json({
//       data: result
//     });
//   }
//   catch (err) {
//     errorHandler(err, res);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const result = await usersCtrl.delete({ ...req.params });
//     res.json({
//       data: result
//     });
//   }
//   catch (err) {
//     errorHandler(err, res);
//   }
// });


module.exports = router;
