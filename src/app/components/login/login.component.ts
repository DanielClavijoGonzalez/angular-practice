import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _user: UserService, private _api: ApiService) {
  }

  ngOnInit(): void {
  }

  login(){
    const user = (document.querySelector('#user') as HTMLInputElement).value
    this._api.login(user).subscribe(response => {
      if(response.status == 200){
        this._user.user = response.user
        //console.log(this._user.user)
      }
    })
  }
}
