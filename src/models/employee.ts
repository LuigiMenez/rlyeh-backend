import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Employee {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  constructor(id: ObjectID, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
