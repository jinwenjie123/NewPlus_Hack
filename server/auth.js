const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "902332991357-clo52d18mn17ufnhsnmc1ak4g3l74eqc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,

  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});