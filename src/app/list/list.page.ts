import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  // public items = this.expenseService.expenses;

  constructor(	private userService: UserService,
								private expenseService: ExpenseService,
								private router: Router) {
	}

  ngOnInit() {
  }

	// ngAfterViewInit() {
	// 	if(!this.userService.signedIn) {
	// 		console.log("Not signed in");
	// 		this.showLogin();
	// 	}
	// }

	// showLogin(){
	// 	 this.router.navigateByUrl("/login");
	// }

	onSelect(expense) {
		console.log(expense);
		this.expenseService.selectedExpense = expense;
		this.router.navigateByUrl("/expense-detail");
	}

	newExpense() {
		this.router.navigateByUrl("expense-new");
	}

}
