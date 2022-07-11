"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMutation = void 0;
exports.registerMutation = `
mutation Reqister($username: String!, $password: String!) {
    register(options: {username: $username, password: $password}) {
    errors {
        field
        message
    }
    user {
        id
        username
    }
    }
}
`;
//# sourceMappingURL=mutation.js.map