import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/Post";
import { UserResolver } from "./resolvers/User";

import Redis  from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { MyContext } from "./types";




const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  await orm.getMigrator().up();

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    session({
        name: "qid",
        store: new RedisStore({client: redis, disableTouch: true}),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
            httpOnly: true,
            sameSite: "lax", // csrf
            secure: false, // cookie only works in https
        },
        saveUninitialized: false,
        secret: "keyboard cat",
        resave: false,
    })
    );

 

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: ({req, res}): MyContext => ({ em: orm.em, req, res}),
  });

   apolloServer.applyMiddleware({
     app,
      cors: {
        origin: "http://localhost:3000",
        credentials: true,
      },
     });

  app.listen(4000, () => {
    console.log("Server listening on port 4000");
  });
};

main().catch((err) => {
  console.error(err);
});
