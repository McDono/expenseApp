import { Component, OnInit } from '@angular/core';

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
		this.router.navigateByURL("/list");
	}

	gotoSignup() {
		this.router.navigateByURL("/signup");
	}

}
