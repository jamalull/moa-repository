const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = function (passport) {
  passport.serializeUser(function (admin, done) {
    done(null, admin.id);
  });

  passport.deserializeUser(async function (id, done) {
    try {
      const admin = await prisma.admin.findUnique({
        where: { id },
      });
      done(null, admin);
    } catch (err) {
      done(err, null);
    }
  });

  // local login strategy
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      function (req, username, password, done) {
        prisma.admin
          .findUnique({
            where: { username },
          })
          .then(async function (admin) {
            if (!admin) {
              return done(
                'No user found.',
                false,
                req.flash("loginMessage", "No user found.")
              );
            }
            if (!bcrypt.compareSync(password, admin.password)) {
              return done(
                'Oops! Wrong password.',
                false,
                req.flash("loginMessage", "Oops! Wrong password.")
              );
            }
            return done(null, admin);
          })
          .catch(function (err) {
            return done(err);
          });
      }
    )
  );

  // local signup strategy
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      function (req, username, password, done) {
        prisma.admin
          .findUnique({
            where: { username },
          })
          .then(async function (admin) {
            if (admin) {
              return done(
                null,
                false,
                req.flash("signupMessage", "That username is already taken.")
              );
            } else {
              const salt = await bcrypt.genSalt(10);
              const hash = await bcrypt.hash(password, salt);
              const newUser = await prisma.admin.create({
                data: {
                  name: req.body.name,
                  username,
                  password: hash,
                },
              });
              return done(null, newUser);
            }
          })
          .catch(function (err) {
            return done(err);
          });
      }
    )
  );
};
