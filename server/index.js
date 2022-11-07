const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth');

const app = express();
 

function isLoggedIn(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);

const geolocation = require('geolocation')
app.get('/location', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  geolocation.getCurrentPosition(function (err, position) {
    if (err) throw err
    console.log(position)
    res.send(position);
  })
});

app.get('/protected', isLoggedIn, (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  console.log();
  res.send(`Hello ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

app.get('/auth/google/failure', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('Failed to authenticate..');
});

app.listen(3001, () => console.log('listening on port: 3001'));