import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-button-unit",
  template: `
    <p>input-button-unit works! The title of this section is: {{ title }}</p>
  `,
  styleUrls: ["./input-button-unit.component.css"]
})
/*
export class InputButtonUnitComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
*/
export class InputButtonUnitComponent implements OnInit {
  title = "Hello World";
  ngOnInit(): void {
    //this.title = "Dans noOnInit";
  }

  constructor() {
    this.title = "i changed it";
    this.changeTitle("Ceci est un nouveau titre");
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
    console.log(this.title);
  }
}
