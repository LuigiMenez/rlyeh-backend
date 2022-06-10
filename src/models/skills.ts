import { Column } from "typeorm";

export class Skills {
  @Column()
  about: string | undefined;

  @Column()
  education: string | undefined;

  @Column()
  career: string | undefined;
}
