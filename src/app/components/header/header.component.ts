import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string = ' ';
  isHeartActive: boolean = false;

  constructor() { }

  ngOnInit() { }

  onHeartClick() {
    this.isHeartActive = !this.isHeartActive;
    console.log('Corazón clickeado');
  }
}
