import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@custor/modules/shared.module';
import {LettertempalteRoutingModule} from './lettertempalte-routing.module';
import {LettertemplateComponent} from './lettertemplate.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RichTextEditorAllModule,
    LettertempalteRoutingModule,
    EditorModule
  ],
  declarations: [LettertemplateComponent],
  exports: [LettertemplateComponent]
})
export class LettertemplateModule { }
