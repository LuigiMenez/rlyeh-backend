import { Column } from "typeorm";

export class Skills {
  @Column()
  about!: string;

  @Column()
  education!: string;

  @Column()
  career!: string;
}
