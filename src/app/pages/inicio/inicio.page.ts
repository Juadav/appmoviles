import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar,IonContent } from "@ionic/angular/standalone";

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'logo-octocat',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'skull-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
