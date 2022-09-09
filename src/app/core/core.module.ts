import { NgModule } from '@angular/core';
import { DropdownDirective } from './directives/dropdown.directive';

const directives = [DropdownDirective];

@NgModule({
  declarations: [...directives],
  imports: [],
  providers: [],
  exports:[...directives]
})
export class CoreModule {}
