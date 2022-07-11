import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field } from "type-graphql";


@ObjectType()
@Entity()
export class Post {
    @Field()
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property()
    createdAt?: Date = new Date();

    @Field(() => String)
    @Property({ onUpdate: () =>  new Date() })
    updatedAt?: Date = new Date();

    @Field()
    @Property()
    title!: string;
}
