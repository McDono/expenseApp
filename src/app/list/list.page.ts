import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public items = this.exepenseService.expenses;
  constructor(	private userService: UserService,
								private expenseService: expenseService) {
	}

  ngOnInit() {
  }

	ngAfterViewInit() {
		if(!this.userService.signedIn) {
			console.log("Not signed in");
			this.showLogin();
		}
	}

	showLogin(){
		 this.router.navigateByURL("/login");
	}

	onSelect(expense) {
		this.expenseService.selectedExpense = expense;
		this.router.navigateByURL("/expense-detail");
	}

	newExpense() {
		this.router.navigateByURL("expense-new");
	}

}
