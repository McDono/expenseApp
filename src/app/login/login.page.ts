import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(	private userService: UserService,
								private router: Router) { }

  ngOnInit() {
  }

	doLogin() {
		this.userService.signedIn = true;
		this.router.navigateByUrl("/list");
	}

	gotoSignup() {
		this.router.navigateByUrl("/signup");
	}

}
