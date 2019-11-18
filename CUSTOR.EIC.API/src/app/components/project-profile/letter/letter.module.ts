import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../project-share/Share.module';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import {LetterComponent} from './letter.component';
import {LetterRoutingModule} from './letter-routing.module';
import {SharedModule} from '@custor/modules/shared.module';
import {EditorModule} from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    CommonModule,
    RichTextEditorAllModule,
    DropDownListModule,
    SharedModule,
    LetterRoutingModule,
    EditorModule
  ],
  declarations: [LetterComponent],
  exports: [LetterComponent]
})
export class LetterModule {

}
