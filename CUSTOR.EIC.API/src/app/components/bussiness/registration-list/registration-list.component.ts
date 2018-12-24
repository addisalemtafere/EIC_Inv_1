import { Component, OnInit } from '@angular/core';
import {BussinessModel} from '../../../model/bussiness/BussinessModel.model';
import {Investor} from '../../../model/investor';
import {MatTableDataSource} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CatagoryService} from '../../../Services/Catagory/Catagory.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {
  selectedRegistration: BussinessModel;
  selectedRegistrationList: any[] = [];
  dataSource: MatTableDataSource<BussinessModel>;
  loadingIndicator = false;
  displayedColumns = ['BusinessNameAmh', 'Tin', 'RegDate', 'actions'];
  constructor(
    private http: HttpClient,
    public toastr: ToastrService,
    private catagoryservice: CatagoryService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.loadingIndicator = true;
    this.catagoryservice.getRegistration().subscribe(
      result => {
        this.selectedRegistrationList = result;
        this.dataSource.data = this.selectedRegistrationList;
        // // console.log(this.selectedRegistrationList);
        this.loadingIndicator = false;
      }
    );
  }

  select(Tin: any) {
    localStorage.setItem('Tin', Tin);
    this.router.navigate(['/bussiness/bussinesstab']);
  }

}
