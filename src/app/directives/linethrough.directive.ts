import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLinethrough]',
  standalone: true,
})
export class LinethroughDirective {
  private counter = 0;
  constructor(private el?: ElementRef) {}
  @HostListener('click') onClick() {
    this.counter++;
    setTimeout(() => {
      if (this.counter === 1) {
        this.counter = 0;
      } else {
        if (this.el && this.counter === 2) {
          console.log('inside');
          this.el.nativeElement.classList.value === 'done'
            ? this.el.nativeElement.classList.remove('done')
            : (this.el.nativeElement.classList = 'done');
          this.counter = 0;
        }
      }
    }, 300);
  }
}
