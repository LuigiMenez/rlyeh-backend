import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

export class Profile {
  @Column()
  about: string | undefined;

  @Column()
  education: string | undefined;

  @Column()
  career: string | undefined;
}
