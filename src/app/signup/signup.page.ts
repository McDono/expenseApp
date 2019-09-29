import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

	doSignUp() {
		this.router.navigateByURL("/login");
	}

	gotoLogin() {
		this.router.navigateByURL("/login");
	}

}
