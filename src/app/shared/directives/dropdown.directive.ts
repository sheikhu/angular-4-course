import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
/**
 * Created by sheikhu on 21/10/17.
 */

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') opened = false;

  constructor() {}

  ngOnInit(): void {

  }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.opened = !this.opened;
  }
}
