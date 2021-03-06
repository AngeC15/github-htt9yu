import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { TodoItem } from "../interfaces/todo-item";

@Component({
  selector: "app-todo-item",
  template: `
    <div class="todo-item">
      <div>
        <input
          type="checkbox"
          class="todo-checkbox"
          (click)="completeItem()"
          [checked]="item.completed"
        />
        <span
          class="todo-title"
          [ngClass]="{ 'todo-complete': item.completed }"
        >
          {{ item.title }}
        </span>
      </div>

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  // put this method below ngOnInit
  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }
}
