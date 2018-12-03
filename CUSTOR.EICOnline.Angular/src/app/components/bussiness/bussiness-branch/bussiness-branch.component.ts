import {Component, OnInit, ɵbypassSanitizationTrustHtml} from '@angular/core';
import {CatagoryService} from '../../../Services/Catagory/Catagory.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {BussinessModel} from '../../../model/bussiness/BussinessModel.model';
import {MatTableDataSource} from '@angular/material';
import {BussinessService} from '../../../Services/bussiness/bussiness.service';
import {AssociateModel} from '../../../model/associate.model';
import {AngConfirmDialogComponent} from '@custor/components/confirm-dialog/confirm-dialog.component';
import {Utilities} from '@custor/helpers/utilities';
import {BussinessBranchModel} from '../../../model/bussiness/BussinessBranch.model';
import {FormControl} from '@angular/forms';
import {exitCodeFromResult} from '@angular/compiler-cli';

@Component({
  selector: 'app-bussiness-branch',
  templateUrl: './bussiness-branch.component.html',
  styleUrls: ['./bussiness-branch.component.scss']
})
export class BussinessBranchComponent implements OnInit {
  RegistrationBranchList: BussinessBranchModel[] = [];
  selectedBranchList: BussinessBranchModel[] = [];
  selectedBussinessBranchList: BussinessBranchModel;
  dataSource: MatTableDataSource<BussinessBranchModel>;
  dataSourceBranch: MatTableDataSource<BussinessBranchModel>;
  loadingIndicator = false;
  displayedColumns = ['RegionID', 'Zone', 'WoredaID', 'HouseNo', 'actions'];
  displayedColumnsBranch = ['RegionID', 'Zone', 'WoredaID', 'HouseNo', 'actions'];
  constructor(
    private http: HttpClient,
    public toastr: ToastrService,
    private bussinessServ: BussinessService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource();
    this.dataSourceBranch = new MatTableDataSource();
  }

  ngOnInit() {
    this.loadingIndicator = true;
    this.bussinessServ.getRegistrationBranchByTin('0016233161').subscribe(
      result => {
        this.RegistrationBranchList = result;
        this.dataSource.data = this.RegistrationBranchList;
        console.log(this.RegistrationBranchList);
      }
    );
    this.loadBussinessBranch();
  }
 loadBussinessBranch() {
   this.bussinessServ.getBussinessBranchByTin('0016233161').subscribe(
     result => {
       this.selectedBranchList = result;
       this.dataSourceBranch.data = this.selectedBranchList;
       console.log(this.selectedBranchList);
       this.loadingIndicator = false;
     }
   );
 }
  onBussinessBranchControlChanged($event, data?: BussinessBranchModel) {
    console.log(data);
    const id = $event.source.value;
    this.selectedBussinessBranchList = {
      MainGuid: id };
    if ($event.checked) {
      this.bussinessServ.saveBussinessBranch(this.selectedBussinessBranchList)
        .subscribe(
          result => { console.log(result);
            this.loadBussinessBranch();
            this.toastr.success('Record saved successfully!'); }
        );
      //this.projectAssociateService.create(this.projectAssForm.value)
      //  .subscribe(result => {
       //   this.projectAssForm.addControl('ProjectAssociateId', new FormControl(''));
       //   this.associateData.push(result);
       //   this.getAssociateByProject();
       //   this.notification('saved');
        //  this.onClear();
       // });
    } else if (!$event.checked) {
      //this.projectAssociateService.delete(data.projectAssociate.ProjectAssociateId)
      //  .subscribe(result => {
       //   this.getAssociateByProject();
        //  this.notification('deleted');
       //   this.onClear();
       // });
    }
   // console.log($event.target);
    console.log($event);
  //  this.associateIdList.push($event.source.value);
    //console.log(this.associateIdList);
  }

  DeleteBussinessBranch(MainGuid: string) {
    this.selectedBussinessBranchList = {
      MainGuid: MainGuid };
    this.bussinessServ.DeleteBussinessBranchByMainGuid(this.selectedBussinessBranchList).subscribe(
      result => { console.log(result);
        this.loadBussinessBranch();
        this.toastr.success('Record Deleted successfully!');
      }
    );
  }


}
