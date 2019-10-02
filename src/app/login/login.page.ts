import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	account = {email: "", password: ""};
  constructor(	private userService: UserService,
								private router: Router,
								private toastCtrl: ToastController) { }

  ngOnInit() {
  }

	doLogin() {
		if((this.account.email != "") && (this.account.password != "")) {
			this.userService.signin(this.account.email, this.account.password)
				.then(data => {
					console.log(data);
					this.presentToast("Success.");
					this.router.navigateByUrl("/list");
				})
				.catch(error => {
					console.error(error);
					this.presentToast(error.message);
				});
		} else {
			this.presentToast("Email & password are required");
			return false;
		}
	}

	async presentToast(message) {
		const toast = await this.toastCtrl.create({
			message: message,
			position: "top",
			duration: 2000
		});
		toast.present();
	}

	gotoSignup() {
		this.router.navigateByUrl("/signup");
	}

}
