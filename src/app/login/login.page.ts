import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../app/services/auth.service";
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router,
    private menu: MenuController) { 
    //  this.menu.enable(false, 'main-menu2');
     // this.menu.enable(true, 'main-menu');
    }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/home']);
      //this.menu.enable(false, 'main-menu');
      //this.menu.enable(true, 'main-menu2');
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'));
  }
  
}
