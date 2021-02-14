import { Component, OnInit } from '@angular/core';
import { faBars, faSignOutAlt, faEyeSlash, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faBars = faBars;
  faEyeSlash = faEyeSlash;
  iconEdit = faEdit;
  iconSearch = faSearch;

  exibirMenu = true;

  menuList = [
    {label: 'Lançamentos', rota: 'lancamentosRoute', icon: this.iconEdit},
    {label: 'Pesquisa Lançamento', rota: 'pesquisaLancamentosRoute', icon: this.iconSearch},
    {label: 'Pessoa', rota: 'pessoaRoute'},
    {label: 'Pesquisa Pessoa', rota: 'pesquisaPessoaRoute'},
    {label: 'Logout', rota: 'logoutRoute', icon: faSignOutAlt }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuBar(): void {
    this.exibirMenu = !this.exibirMenu;
  }

  abrirPelaRota(rota):void {
    console.log(rota);
  }

}
