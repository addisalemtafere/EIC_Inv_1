import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import {ServiceApplicationService} from '../../../Services/service-application.service';
import {ServiceApplicationModel} from '../../../model/ServiceApplication.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../../../Services/Order.service';
import {AccountService} from '../../../../@custor/services/security/account.service';
import {OrderModel} from '../../../model/Order.model';
import {FormService} from '../../../../@custor/validation/custom/form';
import {ServiceTariffModel} from '../../../model/servicetariff';
import {ActivatedRoute} from "@angular/router";
import {ConfigurationService} from '@custor/services/configuration.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, AfterViewInit, AfterViewChecked {
  TotalAmount: number;
  orderForm: FormGroup;
  paid = false;
  today: Date;
  payment: OrderModel;
  serviceTariff: any;
  investorName: string;
  public formErrors = {
    ReceiptNumber: '',
    // CheckNo: '',
  };
  private ServiceId: any;
  private InvestorId: any;
  private workFlowId: any;
  private ServiceApplicationId: any;
  currentLang = '';

  constructor(
    public serviceApplicationService: ServiceApplicationService,
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public formService: FormService,
    public accountService: AccountService,
    private configService: ConfigurationService,
    public orderService: OrderService) {
    this.today = new Date();
  }

  ngOnInit() {
    // this.getServiceApplication();
    this.ServiceId = this.route.snapshot.params['ServiceId'];
    this.InvestorId = this.route.snapshot.params['InvestorId'];
    this.workFlowId = this.route.snapshot.params['workFlowId'];
    this.ServiceApplicationId = this.route.snapshot.params['ServiceApplicationId'];
    this.currentLang = this.configService.language;
    this.initForm();
    this.getServiceApplication(this.ServiceApplicationId);


    // // console.log(localStorage.getItem('ServiceApplicationId'));
  }

  initForm() {
    this.orderForm = this.fb.group({
      ServiceApplicationId: new FormControl(this.ServiceApplicationId),
      ReceiptNumber: new FormControl('', Validators.required),
      CheckNo: new FormControl(''),
      TotalAmount: [''],
      CashierUserName: [''],
      PaymentDate: ['']
    });
  }

  generatePDF() {
    const doc = new jsPDF();
    const width = doc.internal.pageSize.width;
    const height = doc.internal.pageSize.height;
    html2canvas(document.getElementById('payment')).then(function (canvas) {
      const img = canvas.toDataURL('image/jpeg', 'JPEG');
      doc.addImage(img, 'JPEG', 5, 5, 200, 287);
      doc.save(`payment-${Date.now()}.pdf`);
    });


  }


  getServiceApplication(id: any) {
    // console.log(id);
    this.serviceApplicationService.getOneById(id)
      .subscribe((result: ServiceApplicationModel) => {
        this.TotalAmount = result.Service.ServiceTariff[0].Tariff.Fee;
        this.serviceTariff = result.Service.ServiceTariff;
        this.getTotalAmount(this.serviceTariff);
        this.investorName = result.InvestorNameEnglish;
        if (result.Order.TotalAmount != null || result.Order.TotalAmount != undefined) {
          this.formService.markFormGroupTouched(this.orderForm);
          if (this.orderForm.valid) {
            this.orderService.create(this.orderForm.value)
              .subscribe(result => {
                this.payment = result;
                this.paid = true;
              });
          } else {
            this.formErrors = this.formService.validateForm(this.orderForm, this.formErrors, false);
          }
        }
      });
  }

  getTotalAmount(serviceTariff: ServiceTariffModel[]) {
    this.TotalAmount = 0;
    for (const data of serviceTariff) {
      this.TotalAmount = this.TotalAmount + data.Tariff.Fee;
    }
    // console.log(this.TotalAmount);
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked() {
    this.orderForm.patchValue({
      ServiceApplicationId: this.ServiceApplicationId,
      TotalAmount: this.TotalAmount,
      CashierUserName: this.accountService.currentUser.FullName,
      PaymentDate: new Date(),
    });
  }

  onSubmit() {
    this.formService.markFormGroupTouched(this.orderForm);
    if (this.orderForm.valid) {
      this.orderService.create(this.orderForm.value)
        .subscribe(result => {
          this.payment = result;
          this.paid = true;
        });
    } else {
      this.formErrors = this.formService.validateForm(this.orderForm, this.formErrors, false);
    }
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('payment').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`

      <html>
        <head>
          <title>EIC</title>
          <style>
          .clearfix:after {
  content: "";
  display: table;
  clear: both;
}

a {
  color: #5D6975;
  text-decoration: underline;
}



header {
  padding: 10px 0;
  margin-bottom: 30px;
}

#logo {
  text-align: center;
  margin-bottom: 10px;
}



h1 {
  border-top: 1px solid #5D6975;
  border-bottom: 1px solid #5D6975;
  color: #5D6975;
  font-size: 2.4em;
  line-height: 1.4em;
  font-weight: normal;
  text-align: center;
  margin: 0 0 20px 0;
  // background: url(dimension.png);
}

#project {
  float: left;
}

#project span {
  color: #5D6975;
  text-align: right;
  width: 52px;
  margin-right: 10px;
  display: inline-block;
  font-size: 0.8em;
}

#company {
  float: right;
  text-align: right;
}

#project div,
#company div {
  white-space: nowrap;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 20px;
}

//table tr:nth-child(2n-1) td {
//  background: #F5F5F5;
//}

table th,
table td {
  text-align: center;
}

table th {
  padding: 5px 20px;
  color: black;
  border-bottom: 1px solid #C1CED9;
  white-space: nowrap;
  font-weight: normal;
}

table .service,
table .desc {
  text-align: left;
}

table td {
  padding: 20px;
  text-align: right;
}

table td.service,
table td.desc {
  vertical-align: top;
}

table td.unit,
table td.qty,
table td.total {
  font-size: 1.2em;
}

table td.grand {
  border-top: 1px solid #5D6975;;
}

#notices .notice {
  color: black;
  font-size: 1.2em;
}

footer {
  color: black;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #C1CED9;
  padding: 8px 0;
  text-align: center;
}

/*
	 CSS-Tricks Example
	 by Chris Coyier
	 http://css-tricks.com
*/
.tfooter {
  margin-top: 10px !important;
}

table {
  border-collapse: collapse;
}

table td, table th {
  border: 1px solid black;
  padding: 5px;
}

#meta {
  margin-top: 1px;
  width: 300px;
  float: right;
}

#meta td {
  text-align: right;
}

#meta td.meta-head {
  text-align: left;
  background: #eee;
}

#meta td textarea {
  width: 100%;
  height: 20px;
  text-align: right;
}

#items {
  clear: both;
  width: 100%;
  margin: 30px 0 0 0;
  border: 1px solid black;
}

#items th {
  background: #eee;
}

#items textarea {
  width: 80px;
  height: 50px;
}

#items tr.item-row td {
  border: 0;
  vertical-align: top;
}

#items td.description {
  width: 300px;
}

#items td.item-name {
  width: 175px;
}

#items td.description textarea, #items td.item-name textarea {
  width: 100%;
}

#items td.total-line {
  border-right: 0;
  text-align: right;
}

#items td.total-value {
  border-left: 0;
  padding: 10px;
}

#items td.total-value textarea {
  height: 20px;
  background: none;
}

#items td.balance {
  background: #eee;
}

#items td.blank {
  border: 0;
}

//@media print {
//  body * {
//    visibility: hidden;
//  }
//  #payment, #payment * {
//    visibility: visible;
//  }
//  #payment {
//    position: absolute;
//    left: 0;
//    top: 0;
//  }
//}



table > tbody > tr > td:first-child, table > thead > tr > th:first-child {
  width: 115px;
}

table tbody tr:first-child {
  background: #F5F5F5;
}

table thead > tr > td {
  border: none;
  border-bottom: 1px dotted #222d32;
}

table thead > tr > td:first-child, .title-head {
  background-color: #C1CED9;
}

.separator {
  margin: 10px;
  border: 1px dotted #c4cbcc
}

.service, .title-head {
  font-weight: bold;
}

</style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>
`);
    popupWin.document.close();
  }

}
