import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
	account = {email: "", password1 : "", password2 : ""};

  constructor(private router: Router,
							private toastCtrl: ToastController,
							private userService: UserService) { }

  ngOnInit() {
  }

	doSignUp() {
		if ((this.account.email == "") || (this.account.password1 == "")) {
			this.presentToast("Email & password are required");
			return false;
		}
		if (this.account.password1 == this.account.password2) {
			console.log(this.account);

			this.userService.signup(this.account.email, this.account.password1)
				.then (date => {
					console.log(date);
					this.presentToast("Account created. Please login");
					this.router.navigateByUrl("/login");
				})
				.catch(error => {
					console.error(error);
					this.presentToast(error.message);
				});
		} else {
			this.presentToast("Passwords must match.");
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

	gotoLogin() {
		this.router.navigateByUrl("/login");
	}

}
