import {Component, OnInit} from '@angular/core';
import {AppConfiguration} from "../../config/appconfig";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  private baseUrl: any;

  constructor(private config: AppConfiguration) {
  }

  ngOnInit() {
    this.baseUrl = this.config.urls.baseUrl;

  }

}
