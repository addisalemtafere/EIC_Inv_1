import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss']
})
export class VideoViewerComponent implements OnInit {
  public videoType: string;

  constructor(private dialogRef: MatDialogRef<VideoViewerComponent>,
              @Inject(MAT_DIALOG_DATA) data,) {
    this.videoType = data.videoType;

  }

  ngOnInit() {
  }

}
