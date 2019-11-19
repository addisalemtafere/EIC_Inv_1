import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-syncfustion-test-editor',
  templateUrl: './syncfustion-test-editor.component.html',
  styleUrls: ['./syncfustion-test-editor.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class SyncfustionTestEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
