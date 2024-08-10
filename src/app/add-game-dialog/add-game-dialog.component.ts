import { Component, inject, model, signal, ViewChild, ElementRef } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-add-game-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-game-dialog.component.html',
  styleUrls: ['./add-game-dialog.component.scss']  // Korrektur hier
})
export class AddGameDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddGameDialogComponent>);
  @ViewChild('videoElement') videoElement!: ElementRef;

  title = '';
  description = '';
constructor() {

}

closeDialog() {

}

addMyGame() {
  this.dialogRef.close();
}

startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
          const video: HTMLVideoElement = this.videoElement.nativeElement;
          video.srcObject = stream;
          video.play();
      })
      .catch(err => {
          console.error("Error accessing the camera: ", err);
      });
}
  onNoClick(): void {
  }
}
