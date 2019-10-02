import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
		private menu: MenuController) {
    this.initializeApp();
  }

  initializeApp() {
		firebase.initializeApp({
			apiKey: "AIzaSyACrrKM4fHGqQeNV6nW7nYDP7WcKryIN2g",
	    authDomain: "expenseapp-50827.firebaseapp.com",
	    databaseURL: "https://expenseapp-50827.firebaseio.com",
	    projectId: "expenseapp-50827",
	    storageBucket: "",
	    messagingSenderId: "959700743542",
	    appId: "1:959700743542:web:53146924b2b78a3835f657",
	    measurementId: "G-1021GM3ZL0"
    });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

	logout() {
		console.log("Loggin out...");
		firebase.auth().signOut();
		this.menu.close();
		console.log("Logged out");
	}
}
