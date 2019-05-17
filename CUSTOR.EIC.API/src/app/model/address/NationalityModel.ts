export class NationalityModel {
  id: number;
  code: string;
  description: string;
  descriptionEnglish: string;

  constructor(id: number, description: string, descriptionEnglish: string,code: string) {
    this.id = id;
    this.code = code;
    this.description = description;
    this.descriptionEnglish = descriptionEnglish;
  }
}
