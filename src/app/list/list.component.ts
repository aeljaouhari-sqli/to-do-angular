import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinethroughDirective } from '../directives/linethrough.directive';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, LinethroughDirective],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
})
export class ListComponent {
  @Input() lists!: string[];

  clearDoneItems() {
    console.log('clicked');
  }
}
