import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FieldComponent } from './field/field.component';
import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FieldComponent, ListComponent],
  template: `<app-field
      [name]="user.name"
      (sendItemVal)="handleSentItem($event)"
    >
    </app-field>
    <app-list [lists]="items"></app-list>`,
  styleUrl: './app.component.sass',
})
export class AppComponent {
  items: string[] = [];
  handleSentItem(value: string) {
    this.items = [...this.items, value];
  }
  user = {
    name: 'karim',
  };
}
