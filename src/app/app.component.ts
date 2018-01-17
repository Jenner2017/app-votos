import { Component } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi app de votos';

  toggleSideBar():void{
  	$('.ui.labeled.icon.sidebar').sidebar('toggle');
  }
}
