import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email : string;
  public password : string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitRegistro(){
    this.authService.registro(this.email, this.password).then( authService => {
      this.router.navigate(['/home']);
      console.log(authService);
    }).catch(err => console.log(err));
  }

}
