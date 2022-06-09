import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Profile } from "./skills";

@Entity()
export class Employee {
  @ObjectIdColumn()
  _id: ObjectID | undefined;

  @Column()
  firstName: string | undefined;

  @Column()
  lastName: string | undefined;

  @Column((type) => Profile)
  profile: Profile | undefined;
}
