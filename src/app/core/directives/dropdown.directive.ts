import { AfterViewInit, Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[dropdown]',
})
export class DropdownDirective implements AfterViewInit {
  // https://stackoverflow.com/questions/39639098/using-a-directive-to-add-class-to-host-element

  // @HostBinding('class')
  // elementClass = 'custom-class';

  // constructor() {
  // }
  private isOpen = false;

  protected _elementClass: string[] = [];

  @Input('class')
  @HostBinding('class')
  get elementClass(): string {
      return this._elementClass.join(' ');
  }
  set elementClass(val: string) {
      this._elementClass = [...this._elementClass, ...val.split(' ')];
  }

  constructor(private el: ElementRef) {
    this._elementClass.push('custom-theme');
    this._elementClass.push('another-class');
  }

  ngAfterViewInit(): void {
    const dropdown = (this.el.nativeElement as Element).firstElementChild;
    const dropdownContent = (this.el.nativeElement as Element).lastElementChild;
    dropdown?.addEventListener('click', ()=>{
      this.isOpen = !this.isOpen;
      const openImage = dropdown.querySelector('.up-icon');
      const closeImage = dropdown.querySelector('.down-icon');
      openImage?.classList.toggle('hidden')
      closeImage?.classList.toggle('hidden')
      dropdownContent?.classList.toggle('hidden');
    })
  }

}
