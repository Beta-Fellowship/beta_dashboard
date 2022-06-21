import passport from "passport";
import { config } from "dotenv";
import { Profile, Strategy } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";
config();

passport.use(
  new Strategy({
      clientID: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      callbackURL: process.env.DISCORD_REDIRECT_URL,
      scope: ["identify", "guilds", "email"],
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
      console.log(accessToken, refreshToken)
      console.log(profile)
    }
  )
);