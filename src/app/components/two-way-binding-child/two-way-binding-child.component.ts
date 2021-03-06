import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-child',
  templateUrl: './two-way-binding-child.component.html',
  styleUrls: ['./two-way-binding-child.component.css']
})
export class TwoWayBindingChildComponent implements OnInit, OnChanges {
  @Input() childProp: any;
  @Output() childPropChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('child was init')
  }

  ngOnChanges() {
    console.log('new input prop recieved in child');

  }

  emitEvent(){

    this.childProp = 20
    this.childPropChange.emit(this.childProp);
  }

}
