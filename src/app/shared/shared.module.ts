import { NgModule } from '@angular/core';
import { DropdownDirective } from './directives/dropdown.directive';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AutoFocusDirective,
    DropdownDirective,
    TruncatePipe,
  ],
  exports: [
    CommonModule,
    AutoFocusDirective,
    DropdownDirective,
    TruncatePipe
  ]
})
export class SharedModule {

}
