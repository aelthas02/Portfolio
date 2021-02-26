import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() emitPage: EventEmitter<string> = new EventEmitter<string>();

  public isMenuOpen: boolean;


  public setPage(selectedPage): void {
    this.emitPage.emit(selectedPage);
  }

  public openClose(isOpen: boolean): void {
    this.isMenuOpen = isOpen;
  }

}
