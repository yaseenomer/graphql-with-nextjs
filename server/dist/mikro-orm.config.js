"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
const User_1 = require("./entities/User");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.(js|ts)$/,
    },
    entities: [Post_1.Post, User_1.User],
    dbName: "graph",
    user: "postgres",
    password: "postgres",
    type: "postgresql",
    debug: true,
    allowGlobalContext: true,
};
//# sourceMappingURL=mikro-orm.config.js.map