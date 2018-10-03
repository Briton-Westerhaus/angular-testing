import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links = [
    {"href": "index.html","text": "Home"},
    {"href": "about.html","text": "About"},
    {"href": "blog.html", "text": "Blog"},
    {"href": "work.html","text": "Work"},
    {"href": "resume.html","text": "CV"},
    {"href": "contact.html","text": "Contact"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
