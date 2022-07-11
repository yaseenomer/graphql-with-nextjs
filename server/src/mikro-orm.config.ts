import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.(js|ts)$/,
    },
    entities: [Post, User],
    dbName: "graph",
    user: "postgres",
    password: "postgres",
    type: "postgresql",
     debug: true,
     allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];