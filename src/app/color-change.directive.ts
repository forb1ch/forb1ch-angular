import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {
  private counter: number;

  @HostBinding('style.color') textColor: string;
  @HostListener('click', ['$event']) clickCounter(event) {
    let target = event.target;
    const text = event.target.innerText.replace(/[0-9]/g, '');;
    this.counter++;

    target.innerHTML = text + ' ' + this.counter;
  }
  constructor() {
    this.textColor = 'purple';
    this.counter = 0;

    setInterval(() => {
      this.textColor = '#' + (( 1 << 24) * Math.random() | 0).toString(16);
    }, 500);
  }

}
