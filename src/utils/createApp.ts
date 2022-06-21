import express, { Express } from 'express';
import cors from 'cors';
import routes from '../routes';
import session from 'express-session';
import passport from 'passport';
require('../strategies/discord');

export const createApp = (): Express => {
  const app = express();
  // Enable parsing middleware for Requests
  app.use(express.json());
  app.use(express.urlencoded());

  // Enable Cors
  app.use(cors({origin: ['http://localhost:3000'], credentials: true,}));

  app.use(session({
    secret: 'hHHDUBI/UB>>?NUIBIOHOOO(BOBFOQ^QNOWIDHO',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }));

  // Enable passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);
  return app;
}