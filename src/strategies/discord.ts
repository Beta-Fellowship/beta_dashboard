import passport from "passport";
import { config } from "dotenv";
import { Profile, Strategy } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";
import { user } from '../database/schema';
config();

passport.serializeUser((user: any, done) => {
  return done(null, user.user_Id);
});

passport.deserializeUser(async (id: any, done) => {
  try {
    const usr = await user.findOne({ user_Id: id });
    return usr ? done(null, usr) : done(null, false);
  } catch (error) {
    console.log(error);
    return done(error, false);
  }
})

passport.use(
  new Strategy({
      clientID: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      callbackURL: process.env.DISCORD_REDIRECT_URL,
      scope: ["identify", "guilds", "email"],
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
      console.log(accessToken, refreshToken)
      // console.log(profile['username'] + '#' + profile['discriminator'])
      const existingUser = await user.findOne({ user_Id: profile['id'] })
      if (existingUser) return done(null, existingUser)
    }
  )
);