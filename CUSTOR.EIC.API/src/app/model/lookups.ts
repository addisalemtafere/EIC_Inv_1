export class LookupsModel {
  public LookupId: number;
  public LookUpTypeId: number;
  public Amharic: string;
  public English: string;
  public Description: string;

  constructor(LookupId?: number, LookUpTypeId?: number, Amharic?: string, English?: string, Description?: string) {
    this.LookupId = LookupId;
    this.LookUpTypeId = LookUpTypeId;
    this.Amharic = Amharic;
    this.English = English;
    this.Description = Description;
  }
}
