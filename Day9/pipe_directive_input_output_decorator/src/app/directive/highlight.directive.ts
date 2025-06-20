import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  constructor(private e:ElementRef) {

  }

  @HostBinding('style.width') width: string = '400px';
  @HostBinding('style.height') height: string = '300px';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'lightblue';
  @HostBinding('style.border') border: string = '2px solid red';
  @HostBinding('style.display') display: string = 'flex';

 @HostListener('mouseenter') onMouseEnter() {
  this.e.nativeElement.style.backgroundColor = 'yellow';

 }

  @HostListener('mouseleave') onMouseLeave() {
  this.e.nativeElement.style.backgroundColor = 'lightblue';

  }

  @HostListener('click') onClick() {
    this.e.nativeElement.style.backgroundColor = 'green';
    this.e.nativeElement.style.color = 'white';
    this.e.nativeElement.style.fontSize = '20px';
    this.e.nativeElement.style.fontWeight = 'bold';

  }
}
