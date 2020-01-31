import { Directive, OnInit, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  exportAs: 'appToggle',
  selector: 'appToggle, [appToggle]',
})

export class ToggleDirective {
  constructor() { }
}

