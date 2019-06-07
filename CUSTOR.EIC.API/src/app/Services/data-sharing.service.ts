import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {ProjectModel} from '../model/Project.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  projectId = new Subject<any>();
  steeperIndex = new Subject<any>();
  renewalIndex = new Subject<any>();
  // registrationIndex = new Subject<any>();
  currentIndex = new BehaviorSubject(null);
  workFlowId = new Subject<any>();
  isNew = new Subject<boolean>();
  startingEditingProject = new Subject<ProjectModel>();
  serviceId = new Subject<any>();
  assignTask = new Subject<boolean>();
  investorTabSelectedIndex = new Subject<any>();
  isLoggedIn = new Subject<boolean>();

  constructor() {

  }
}
