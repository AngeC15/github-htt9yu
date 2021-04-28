import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-button-unit",
  template: `
    <p>title is {{ title }}</p>
    <input
      #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue($event.target.value)"
    />

    <button (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ["./input-button-unit.component.css"]
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  title = "Hello World";

  constructor() {}

  ngOnInit(): void {}
  /*
  changeTitle(event): void {
  console.log(event);
  this.title = event.target.value; // the original functionality still works
}
*/
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
