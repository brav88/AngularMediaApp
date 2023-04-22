import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService) { }

  username!: string
  password!: string

  login() {
    var loginData = { username: this.username, password: this.password }

    this.loginService.login(loginData)
      .subscribe(
        (data: any) => {
          if (Object.keys(data).length === 1) {
            if (data[0].status) {
              this.loginService.isLogin();
              this.router.navigate(['/movies']);
            }
            else {
              this.toastr.error('User has been inactivated', 'Error message!');
            }
          }
          else {
            this.toastr.error('User not found', 'Error message!');
          }
        }
      );
  }
}
