import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Skills } from "./skills";

@Entity()
export class Employee {
  @ObjectIdColumn()
  _id: ObjectID | undefined;

  @Column()
  firstName: string | undefined;

  @Column()
  lastName: string | undefined;

  @Column((type) => Skills)
  skills: Skills | undefined;
}
