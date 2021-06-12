import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  sair(){
    localStorage.removeItem('tokenGuentai');
    this.router.navigate(['/login']);
  }

  perfil(){
    this.router.navigate(['/home', {outlets: {home: ['perfil']}}]);
  }

}
