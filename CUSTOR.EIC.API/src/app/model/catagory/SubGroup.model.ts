export class SubGroup {
  public Id: any;
  public Description: string;
  public EnglishDescription: string;
  public Code?: string;
  public Parent?: number;
  public Selected?: boolean;

  constructor(Id: any, Description: string,
              EnglishDescription: string,
              Parent: number, Selected?: boolean, Code?: string) {
    this.Id = Id;
    this.Description = Description;
    this.EnglishDescription = EnglishDescription;
    this.Code = Code;
    this.Parent = Parent;
    this.Selected = Selected;
  }
}
