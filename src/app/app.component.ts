import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BritonWesterhaus.com';
  other = 'Hello Rachel!';
  jsonProperties = {
    "title": "Brito Westerhaus - Software Engineer",
    "header": "Briton Westerhaus",
    "subHeader": "Software Engineer",
    "headshotSource": "assets/BritonWesterhaus.jpg"
  };
}
