import { Injectable, inject } from '@angular/core';
import { Game } from '../interface/interface.component';
import { Firestore, collection,collectionData, doc,docData, onSnapshot,addDoc,updateDoc, deleteDoc, limit, orderBy,query,where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Injectable({
  providedIn : 'root'
})
export class GameListService {
  gameList: Game[]= [];
  firestore: Firestore = inject(Firestore);

  games$;
  // games;

  constructor() {
    let gameCollection = collection(this.firestore, 'game');
    this.games$ = collectionData(gameCollection);
    this.games$.subscribe(gameList => {
      console.log(gameList);
      
    })
  }

  getSingleDocRef (colId:string, docId:string) {
    return doc(collection(this.firestore, colId), docId);
  }

}
