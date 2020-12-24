import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algamoney-ui-mmlr';
  titleResult: String;

  toUpper = () => this.titleResult = this.title.toUpperCase();
}
