import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {VideoViewerComponent} from "./video-viewer/video-viewer.component";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public dialog: MatDialog,) {
  }

  ngOnInit() {
  }

  viewVideo(videoType: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      videoType: videoType,
      title: 'video'
    };
    this.dialog.open(VideoViewerComponent, dialogConfig);
  }
}
