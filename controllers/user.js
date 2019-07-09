const User = require('../db/models/user');
const Joi = require('@hapi/joi');


const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30),
  surName: Joi.string().alphanum().min(2).max(30),
  firstName: Joi.string().alphanum().min(2).max(30),
  middleName: Joi.string().alphanum().min(1).max(30),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
});

const resultItemConverter = (item) => {
  return {
    id: item.id,
    username: item.username,
    surName: item.surName,
    firstName: item.firstName,
    middleName: item.middleName,
    password: item.password
  };
};

exports.add = ({ username, surName, firstName, middleName, password }) => new Promise(async (resolve, reject) => {
  try {
    const { error, value } = Joi.validate({ username, surName, firstName, middleName, password }, schema);
    if (error) {
      return reject({ error });
    }

    const newUser = new User({
      username,
      surName,
      firstName,
      middleName,
      password
    });

    const result = await newUser.save();

    resolve(resultItemConverter(result));
  }
  catch (err) {
    reject(err);
  }
});








// exports.getAll = () => new Promise(async (resolve, reject) => {
//   try {
//     let result = await User.find();

//     resolve(result.map((item) => resultItemConverter(item)));
//   }
//   catch (err) {
//     reject({
//       message: err,
//       statusCode: 500
//     });
//   }
// });



// exports.get = ({ id }) => new Promise(async (resolve, reject) => {
//   try {
//     if (!id) {
//       return reject('id is required');
//     }

//     const result = await User.findById(id);

//     resolve(resultItemConverter(result));
//   }
//   catch (err) {
//     reject(err);
//   }
// });

// exports.update = ({ id, username, email }) => new Promise(async (resolve, reject) => {
//   try {
//     if (!id) {
//       return reject('id is required');
//     }

//     const { error, value } = Joi.validate({ username, email }, schema);
//     if (error) {
//       return reject(error);
//     }

//     const user = await User.findById(id);

//     user.set({
//       username,
//       email
//     });
//     const result = await user.save();

//     resolve(resultItemConverter(result));
//   }
//   catch (err) {
//     reject(err);
//   }
// });

// exports.delete = ({ id }) => new Promise(async (resolve, reject) => {
//   try {
//     if (!id) {
//       return reject('id is required');
//     }
//     await User.findByIdAndRemove(id);

//     resolve(true);
//   }
//   catch (err) {
//     reject(err);
//   }
// });
