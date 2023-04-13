import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask!: boolean;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
