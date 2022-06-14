import { Column } from "typeorm";

export class Language {
  @Column()
  nameLanguage!: any;

  @Column()
  level!: any;

  constructor(nameLanguage: any, level: any) {
    this.nameLanguage = nameLanguage;
    this.level = level;
  }
}
