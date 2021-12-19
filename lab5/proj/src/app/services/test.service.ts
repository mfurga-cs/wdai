import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private db: AngularFirestore) { }

  getAll(): Observable<any> {
    const ref = this.db.collection<any>('/dishes');
    return ref.valueChanges({ idField: 'id' });
  }

}

