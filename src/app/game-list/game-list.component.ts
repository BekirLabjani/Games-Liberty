import { getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';
import { GameListService } from '../firebase-service/firebase-service';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection,doc,docData,  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {ChangeDetectionStrategy, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {

  MatDialog,

} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddGameDialogComponent } from '../add-game-dialog/add-game-dialog.component';
@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [ AsyncPipe],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  firestore: Firestore = inject(Firestore);
  games$;
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

constructor(public gameService : GameListService){
  const spieleCollection = collection(this.firestore, 'game');
  this.games$ = collectionData(spieleCollection, { idField: 'id' });
}


}


