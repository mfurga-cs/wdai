import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Student } from '../students/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private db: AngularFirestore) {}

  createStudent(student: Student): void {
    this.db.collection('/students').add({
      'name': student.name,
      'age': student.age
    });
  }

  updateStudent(key: string, value: any) {
    this.db.collection('/students').doc(key).set({
      'name': value.name,
      'age': value.age
    });
  }

  deleteStudent(key: string) {
    return this.db.collection('/students').doc(key).delete();
  }

  getStudentsList(): Observable<Student[]> {
    const ref = this.db.collection<Student>('/students');
    return ref.valueChanges({ idField: 'key' });
  }

  deleteAll() {
    this.db.collection('/students').get().toPromise().then(students => {
      students.forEach(student => student.ref.delete());
    });
  }
    
}
