import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  // tslint:disable-next-line: no-inferrable-types
  titleNav: string = '';
  private myUrl: any;

  constructor(private router: Router, private route: ActivatedRoute, public auth: AuthService ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log(e.url);
        const ruta = e.url;

        switch (ruta) {
          case '/inicio':
            this.titleNav = 'Inicio de PageFit';
            break;
            case '/':
            this.titleNav = 'Inicio de PageFit';
            break;
          case '/quienessomos':
              this.titleNav = '¿Quiénes somos?';
              break;
          case '/misionyvision':
                this.titleNav = 'Nuestra misión y visión';
                break;
          case '/rutinas':
                  this.titleNav = 'Mira todas nuestras rutinas';
                  break;
          case '/creaturutina':
                    this.titleNav = 'Aquí podrás personalizar tu rutina';
                    break;
          case '/ajustes':
                      this.titleNav = 'Realiza los ajustes de la cuenta';
                      break;
          default:
            break;
        }
       }
     });
  }

}
