import {
  Component,
  Input,
  NgModule,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.sass',
})
export class FieldComponent {
  @Input() name!: string;

  itemValue = '';
  @Output() sendItemVal: EventEmitter<string> = new EventEmitter<string>();

  handleAddItem() {
    if (this.itemValue) {
      this.sendItemVal.emit(this.itemValue);
      this.itemValue = '';
    }
  }
}
