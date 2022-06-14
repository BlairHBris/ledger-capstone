import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  privateKey: string | undefined
  verified: boolean = false 

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginCheck({ privateKey } : {privateKey: string}) {
    if(this.loginService.checkKeys(privateKey)) {
      this.router.navigate(['/transactions'])
    }
    else {
      alert('The entered key is invalid. Please try again.')
    }
  }

}
