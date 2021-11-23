import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  clicks: number = 0;
  
  @Input()
  isBlocked: boolean = false;

  @Output()
  changed: EventEmitter<number> = new EventEmitter();

  constructor() { }

  onClick(event: Event): void {
    if (!this.isBlocked) {
      this.clicks++;
      this.changed.emit(this.clicks);
    }
  }

  onReset(event: Event): void {
    this.isBlocked = false;
    this.clicks = 0;
    this.changed.emit(this.clicks);
  }

  ngOnInit(): void {
  }

}
