import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {determineId} from '@custor/helpers/compare';
import {AppConfiguration} from '../../config/appconfig';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {LookUpService} from '../../Services/look-up.service';
import {ErrorMessage} from '@custor/services/errMessageService';
import {LetterTemplateModel} from '../../model/letter-template.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LookupsModel} from '../../model/lookups';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs/index';
import {LettertepmlateService} from './lettertepmlate.service';
import {ConfigurationService} from "@custor/services/configuration.service";
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { RichTextEditorComponent, CountService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-lettertemplate',
  templateUrl: './lettertemplate.component.html',
  styleUrls: ['./lettertemplate.component.scss'],
  providers:[ConfigurationService],
  encapsulation: ViewEncapsulation.None,
})
export class LettertemplateComponent implements OnInit, OnDestroy {
  // public Editor = ClassicEditor;
  // editorConfig: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: 'auto',
  //   minHeight: '0',
  //   maxHeight: 'auto',
  //   width: 'auto',
  //   minWidth: '0',
  //   translate: 'yes',
  //   enableToolbar: true,
  //   showToolbar: true,
  //   placeholder: 'Enter text here...',
  //   defaultParagraphSeparator: '',
  //   defaultFontName: '',
  //   defaultFontSize: '',
  //   fonts: [
  //     {class: 'arial', name: 'Arial'},
  //     {class: 'times-new-roman', name: 'Times New Roman'},
  //     {class: 'calibri', name: 'Calibri'},
  //     {class: 'comic-sans-ms', name: 'Comic Sans MS'}
  //   ],
  //   customClasses: [
  //     {
  //       name: 'quote',
  //       class: 'quote',
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: 'titleText',
  //       class: 'titleText',
  //       tag: 'h1',
  //     },
  //   ],
  //   uploadUrl: 'v1/image',
  //   sanitize: true,
  //   toolbarPosition: 'top',
  // };
  @ViewChild('form')
  @ViewChild('apiRTE')
  public rteObj: RichTextEditorComponent;
  incentiveRequestItemSub: Subscription;
  lookupSub: Subscription;
  title: string;
  LetterTemplateId: any;
  isNewLetterTempalte = false;
  showTextEditor = false;
  LetterTemplateModel: LetterTemplateModel;
  LetterTemplateModels: LetterTemplateModel[] = [];
  letterTemplateForm: FormGroup;
  editMode = false;
  addMode = false;
  loading = false;
  dataSource: any;
  letterTemplateItemtEditIndex: number;
  LetterContent: string;
  displayedColumns = [
    'LetterType', 'Action'
  ];
  subscription: Subscription;

  loadingIndicator: boolean;
  Lookups: LookupsModel[];
  private form: NgForm;
  private tinymce: any;
  private currentLang: string;
  public rteValue: string ;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public route: ActivatedRoute,
              private http: HttpClient,
              private snackbar: MatSnackBar,
              private lookUpsService: LookUpService,
              private configService: ConfigurationService,
              private config: AppConfiguration,
              private LettertepmlateService: LettertepmlateService, private errMsg: ErrorMessage,
              private toastr: ToastrService,
              private fb: FormBuilder) {
    this.LetterTemplateModel = <LetterTemplateModel>{};
    // initialize the form
    this.initForm();
    this.initStaticData(this.currentLang);
  }

  ngOnInit() {
    this.currentLang = this.configService.language;
    this.initForm();
    this.getIncentiveReaquestItmes();
    this.getItemLookup();
  }
  addLetter(){
    console.log("dfsd");
    this.isNewLetterTempalte = true;
    this.addMode = true;
  }
  onClear() {
    this.editMode = false;
    this.letterTemplateForm.reset();
  }

  getIncentiveReaquestItmes() {
    this.LettertepmlateService.getLetterTemplateList(this.currentLang).subscribe(result => {
      if (result.length > 0) {
        this.LetterTemplateModels = result;
        this.dataSource = new MatTableDataSource<LetterTemplateModel>(this.LetterTemplateModels);
        this.loading = false;
      }
    }, error => this.errMsg.getError(error));
  }

  getItemLookup() {
    this.loadingIndicator = true;
    this.lookupSub = this.lookUpsService
      .getLookupByParentId(707, this.currentLang)
      .subscribe(result => {
          this.Lookups = result;
        },
        error => this.toastr.error(this.errMsg.getError(error)));
  }

  initStaticData(currentLang) {
  }

  initForm() {
    this.letterTemplateForm = this.fb.group({
      //IncentiveRequestItemId: ['0', Validators.required],
      LetterType: ['0', Validators.required],
      // Title: ['0', Validators.required],
      // ToOrg: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]+$')])],
      LetterContent: ['', Validators.required],
      IsActive: ['0', Validators.required]

    })
  }

  compareIds(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

  public onSubmit() {
    console.log(this.getEditedLetterTemplate());
    this.loadingIndicator = true;
    return this.LettertepmlateService.saveletterTemplate(
      this.getEditedLetterTemplate()).subscribe((LetterTemplateModel: LetterTemplateModel) => {
        this.saveCompleted(LetterTemplateModel);
      },
      err => this.handleError(err));
  }

  onEditLetterTemplate(index: number) {
    this.editMode = true;
    this.letterTemplateItemtEditIndex = index;
    this.LetterTemplateModel = this.LetterTemplateModels[index];
    console.log(this.LetterTemplateModel);
    this.letterTemplateForm.patchValue(
      this.LetterTemplateModel
    );
    // console.log(this.LetterTemplateModel);
  }

  deleteLetterTemplate(index: number, id: number) {
    this.LettertepmlateService.deleteletterTemplate(id)
      .subscribe(() => {
        this.notification('Deleted');
        this.LetterTemplateModels.splice(index, 1);
        this.dataSource = new MatTableDataSource<LetterTemplateModel>(this.LetterTemplateModels);
      });
  }

  notification(message: string) {
    this.loading = false;
    this.toastr.success(` Succesfully ${message} Data.!`, 'Success');

    this.snackbar.open(` Succesfully ${message} Data.!`, 'Close', {
      duration: 3000,
    });
  }

  ngOnDestroy() {
    // this.IncentiveRequestItemSub.unsubscribe();
  }

  onBack() {
    // this.router.navigate(['IncentiveRequestItems/list']);
    window.history.back();
  }

  private saveCompleted(LetterTemplateModel?: LetterTemplateModel) {
    if (LetterTemplateModel) {
      this.LetterTemplateModel = LetterTemplateModel;
      //this.dataSource = new MatTableDataSource<LetterTemplateModel>(this.LetterTemplateModels);
      this.getIncentiveReaquestItmes();
    }
    this.onClear();
    this.loadingIndicator = false;
    this.toastr.success('Record saved successfully!');
    // this.router.navigate(['IncentiveRequestItems/list']);
    //window.history.back();
  }

  private handleError(err) {
    this.loadingIndicator = false;
    this.toastr.error(this.errMsg.getError(err));
    this.loadingIndicator = false;
  }

  private getEditedLetterTemplate(): LetterTemplateModel {
    const formModel = this.letterTemplateForm.value;
    console.log(formModel);
    alert(this.rteObj.value);
    // 
    // if(this.isNewLetterTempalte !== true){
    //   this.LetterTemplateId = this.LetterTemplateModel.LetterTemplateId
    // }
    return {
      // LetterTemplateId:  this.LetterTemplateId,
      LetterTemplateId: this.isNewLetterTempalte ? 0 : this.LetterTemplateModel.LetterTemplateId,
      LetterType: formModel.LetterType,
      LetterContent: this.rteObj.value,
      IsActive: true,
    };
  }

}

