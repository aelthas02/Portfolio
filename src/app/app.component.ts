import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'Portfolio';
  public page = 'about';

  public selectedPage(selectedPage): void {
    this.page = selectedPage;
  }
}
