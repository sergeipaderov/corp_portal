const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userDB = {
  id: 1,
  username: 'admin',
  password: 'admin'
};

passport.serializeUser( (user, done) => done(null, user.id) );

passport.deserializeUser( (id, done) => {
  // User.findByID(id, (err, user) => done(err, user));
  const user = (userDB.id === id) ? userDB : false;
  done(null, user.id);
});

passport.use(new LocalStrategy(
  function(username, password, done){
    console.log(username, password);
    if(username === userDB.username && password === userDB.password) {
      console.log('config ---->', userDB);
      return done(null, userDB);
    } else {
      return done(done, false);
    }
  }

  // function(username, password, done) {
  //   User.findOne({ username: username }, function (err, user) {
  //     if (err) { return done(err); }
  //     if (!user) {
  //       return done(null, false, { message: 'Incorrect username.' });
  //     }
  //     if (!user.validPassword(password)) {
  //       return done(null, false, { message: 'Incorrect password.' });
  //     }
  //     return done(null, user);
  //   });
  // }
));

// module.exports = passport;