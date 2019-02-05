import {Component, OnInit} from '@angular/core';
import {AccountService} from "@custor/services/security/account.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {DataSharingService} from "../../../Services/data-sharing.service";
import {NotificationComponent} from "../../project-profile/notification/notification.component";
import {Investor} from '../../../model/investor';
import {InvestorService} from '../../investor/investor.service';
import {ToastrService} from 'ngx-toastr';
import {ErrorMessage} from '@custor/services/errMessageService';

@Component({
  selector: 'app-registration-tab',
  templateUrl: './registration-tab.component.html',
  styleUrls: ['./registration-tab.component.scss']
})
export class RegistratioinTabComponent implements OnInit {

  public tin: string;
  public legalStatus: string;
  public selectedIndex = 0;
  public title: string;
  public projectName: string;
  public investorName: string;
  public isInvestor: boolean;
  public userName: string;
  investor: Investor;
  constructor(private accountService: AccountService,
              public router: Router,
              public dialog: MatDialog,
              private toastr: ToastrService,
              public errMsg: ErrorMessage,
              private investorService: InvestorService,
              public dataSharing: DataSharingService) {  }


  ngOnInit() {
    this.getInvsetorInformation();
    this.getUserType();
    this.title = localStorage.getItem('title');
    this.projectName = localStorage.getItem('projectName');
    this.investorName = localStorage.getItem('investorName');
    this.userName = this.accountService.currentUser.FullName;
    this.tin = localStorage.getItem('tin');
    //this.legalStatus = localStorage.getItem('LegalStatus');
  }

  getInvsetorInformation() {
    this.investorService.getInvestor(localStorage.getItem('InvestorId'))
      .subscribe(result => {
          this.investor = result;
          // console.log(this.investor.Tin);
          if(this.investor.Tin.trim() == "")
          {
            this.toastr.warning('Please  complete investor profile before request any service!!', 'Info');
            this.router.navigate(['project-profile/0']);
          }
          else {

            localStorage.setItem('Tin', this.investor.Tin.toString());
            localStorage.setItem('LegalStatus', this.investor.LegalStatus.toString());
           /* localStorage.setItem('TradeName', this.investor.TradeName.toString());
            localStorage.setItem('TradeNameEnglish', this.investor.TradeNameEnglish.toString());*/
          }
        },
        error => this.toastr.error(error));

  }


  getUserType() {
    this.isInvestor = this.accountService.getUserType();
  }

  addMessage() {
    this.dialog.open(NotificationComponent);

  }
}

