import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Skills } from "./skills";

@Entity()
export class Employee {
  @ObjectIdColumn()
  _id!: ObjectID;

  @Column()
  firstName!: any;

  @Column()
  lastName: any;

  @Column()
  service!: any;

  @Column((type) => Skills)
  skills!: Skills;
}
