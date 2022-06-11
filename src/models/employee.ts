import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Skills } from "./skills";

@Entity()
export class Employee {
  @ObjectIdColumn()
  _id!: ObjectID;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column((type) => Skills)
  skills!: Skills;
}
