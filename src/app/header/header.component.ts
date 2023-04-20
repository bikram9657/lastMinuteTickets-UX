import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  toggleMenu() {
    const navbarNav = this.elRef.nativeElement.querySelector('#navbarNav');
    this.renderer.removeClass(navbarNav, 'show');
  }
}
