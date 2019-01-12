export class ServicePrerequisiteModel {
  constructor(serviceId?: number, isActive?: boolean, Name?: string, NameEnglish?: string, ServiceType?: any,
              DisplayName?: string, DisplayNameEnglish?: string) {
    this.ServiceId = serviceId;
    this.Name = Name;
    this.DisplayName = DisplayName;
    this.NameEnglish = NameEnglish;
    this.DisplayNameEnglish = DisplayNameEnglish;
    this.ServiceType = ServiceType;
    this.IsActive = isActive;
  }

  public ServiceId: number;
  public ServiceType?: any;
  public Name: string;
  public NameEnglish: string;
  public DisplayName: string;
  public DisplayNameEnglish: string;
  public IsActive: boolean;
}
