import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent {

  @Output() openClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isOpen = false;

  public check(): void {
    this.isOpen = !this.isOpen;
    this.openClose.emit(this.isOpen);
  }
}
