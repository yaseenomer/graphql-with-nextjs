import {
  Resolver,
  Query,
  Ctx,
  Arg,
  Mutation,
  Field,
  InputType,
  ObjectType,
} from "type-graphql";
import { MyContext } from "../types";
import { User } from "../entities/User";
import argon2 from "argon2";

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@InputType()
class UserNamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(@Ctx() { em }: MyContext): Promise<User[]> {
    return em.find(User, {});
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UserNamePasswordInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    const { username, password } = options;

    if (username.length <= 2) {
      return {
        errors: [
          { field: "username", message: "length must be greater than 2" },
        ],
      };
    }

    if (password.length <= 2) {
      return {
        errors: [
          { field: "password", message: "length must be greater than 2" },
        ],
      };
    }

    const hashedPassword = await argon2.hash(password);
    const user = em.create(User, {
      username,
      password: hashedPassword,
    });

    try {
      await em.persistAndFlush(user);
    } catch (err) {
      // duplicate username
      if (err.code === "23505") {
        return {
          errors: [{ field: "username", message: "username already taken" }],
        };
      }
    }
    return { user };
  }

  /**
   *
   * @param
   * @param options UserNamePasswordInput
   * @param param1
   * @returns
   */
  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UserNamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });
    if (!user) {
      return {
        errors: [{ field: "username", message: "that username doesn't exist" }],
      };
    }
    const valid = await argon2.verify(user.password, options.password);

    if (!valid) {
      return {
        errors: [{ field: "password", message: "incorrect password" }],
      };
    }

    // login successful
    req.session.userId = user.id;
    return { user };
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MyContext): Promise<User | null> {
    const userId = req.session.userId;
    return userId ? await em.findOne(User, { id: userId }) : null;
  }
}
