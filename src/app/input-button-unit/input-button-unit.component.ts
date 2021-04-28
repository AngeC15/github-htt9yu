import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-button-unit",
  template: `
    <p>title is {{ title }}</p>
    <input
      #inputElementRef
      [value]="title"
      (keyup.enter)="changeTitle($event.target.value)"
    />
    <button (click)="changeTitle(inputElementRef.value)">Save</button>
  `,
  styleUrls: ["./input-button-unit.component.css"]
})
export class InputButtonUnitComponent implements OnInit {
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
    this.title = newTitle;
  }
}
