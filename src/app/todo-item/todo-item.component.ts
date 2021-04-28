import { Component, OnInit, Input } from "@angular/core";
import { TodoItem } from '../interfaces/todo-item';


@Component({
  selector: "app-todo-item",
  template: `
    <p>composant todo</p>
  `,
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  constructor() {}

  ngOnInit() {}
}
