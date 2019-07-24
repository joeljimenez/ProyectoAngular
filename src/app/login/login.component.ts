import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/Login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service: LoginService) { }

  ngOnInit() {
  }
  public login_data: any = {
    email: '',
    password: ''
  };


  login() {
    console.log(this.login_data);
    this._service.Login(this.login_data).subscribe((data) => {
      console.log(data);
    });
  }

}
