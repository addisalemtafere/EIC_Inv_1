import {Component, OnInit, ɵbypassSanitizationTrustHtml} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material';
import {BussinessService} from '../../../Services/bussiness/bussiness.service';
import {BussinessBranchModel} from '../../../model/bussiness/BussinessBranch.model';
import {AddressModel} from '../../../model/address/Address.model';

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
  addressModel: AddressModel;
  loadingIndicator = false;
  displayedColumns = ['RegionID', 'Zone', 'WoredaID', 'HouseNo', 'actions'];
  displayedColumnsBranch = ['RegionID', 'Zone', 'WoredaID', 'HouseNo', 'actions'];
  private InvestorId: number;
  constructor(
    private http: HttpClient,
    public toastr: ToastrService,
    private bussinessServ: BussinessService,
    public route: ActivatedRoute,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource();
    this.dataSourceBranch = new MatTableDataSource();
  }

  ngOnInit() {
    this.loadingIndicator = true;
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.bussinessServ.getRegistrationBranchByInvestorId(this.InvestorId).subscribe(
      result => {
        this.RegistrationBranchList = result;
        this.dataSource.data = this.RegistrationBranchList;
        console.log(this.RegistrationBranchList);
      }
    );
    this.loadBussinessBranch();
  }
 loadBussinessBranch() {
   this.InvestorId = this.route.snapshot.params['InvestorId'];
   this.bussinessServ.getBussinessBranchByInvestorId(this.InvestorId).subscribe(
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
      AddressId: id };
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

  DeleteBussinessBranch(AddressId: number) {
    this.selectedBussinessBranchList = {
      AddressId: AddressId };
    this.bussinessServ.DeleteBussinessBranchByAddresId(this.selectedBussinessBranchList).subscribe(
      result => { console.log(result);
        this.loadBussinessBranch();
        this.toastr.success('Record Deleted successfully!');
      }
    );
  }


}
